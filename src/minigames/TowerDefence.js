// ── Tower Defence — Troweled Earth Rush: Contract Wars main game mode ──────────
// ── Layout constants ─────────────────────────────────────────────────────────
const CW = 400; // canvas width
const CH = 600; // canvas height
const HH = 55; // HUD strip height (top)
const TH = 80; // tray height (bottom)
const GH = CH - HH - TH; // grid height = 465
const COLS = 10;
const ROWS = 7;
const CX = CW / COLS; // cell width  = 40
const CY = GH / ROWS; // cell height ≈ 66.4
const PR = 3; // path row index (centre of grid)
const BASE_SPD = 55; // px/s — baseline enemy speed (normal)
const T_DEFS = {
    jose: { name: 'Wall Maestro', damage: 35, range: 3, fireRate: 1.2, cost: 60000, color: '#E8A830', special: 'slow' },
    matt: { name: 'Negotiator', damage: 20, range: 4, fireRate: 0.8, cost: 80000, color: '#4A90D9', special: 'payout' },
    tsuyoshi: { name: 'Rush Tower', damage: 15, range: 2, fireRate: 3.0, cost: 50000, color: '#FF4444', special: 'none' },
    jarrad: { name: 'Blueprint', damage: 25, range: 3, fireRate: 1.0, cost: 70000, color: '#9B59B6', special: 'double' },
    fabio: { name: 'Pressure', damage: 30, range: 2.5, fireRate: 1.5, cost: 65000, color: '#27AE60', special: 'boost' },
    phil: { name: 'Veteran Wall', damage: 50, range: 2, fireRate: 0.5, cost: 90000, color: '#7F8C8D', special: 'block' },
    joe: { name: 'Intel', damage: 10, range: 5, fireRate: 2.0, cost: 55000, color: '#E67E22', special: 'loot' },
    connie: { name: 'Command', damage: 40, range: 3.5, fireRate: 1.0, cost: 100000, color: '#E74C3C', special: 'aoe' },
    mikayla: { name: 'Admin', damage: 5, range: 1, fireRate: 0.3, cost: 40000, color: '#1ABC9C', special: 'income' },
};
const E_DEFS = {
    grunt: { hp: 80, spd: 1.0, reward: 3000, radius: 12 },
    runner: { hp: 40, spd: 2.0, reward: 2000, radius: 10 },
    tanker: { hp: 300, spd: 0.5, reward: 8000, radius: 18 },
    boss: { hp: 1000, spd: 0.8, reward: 50000, radius: 24 },
};
function buildWave(wi) {
    const defs = [
        /* wave 1 */ [{ type: 'grunt', count: 8, interval: 1.5, start: 0 }],
        /* wave 2 */ [{ type: 'grunt', count: 6, interval: 1.5, start: 0 },
            { type: 'runner', count: 3, interval: 2.0, start: 1.0 }],
        /* wave 3 */ [{ type: 'grunt', count: 4, interval: 1.5, start: 0 },
            { type: 'runner', count: 4, interval: 2.0, start: 1.0 },
            { type: 'tanker', count: 1, interval: 0, start: 8.0 }],
        /* wave 4 */ [{ type: 'grunt', count: 3, interval: 1.5, start: 0 },
            { type: 'runner', count: 3, interval: 1.8, start: 0.8 },
            { type: 'tanker', count: 2, interval: 5.0, start: 5.0 }],
        /* wave 5 */ [{ type: 'grunt', count: 2, interval: 2.0, start: 0 },
            { type: 'runner', count: 2, interval: 2.0, start: 1.0 },
            { type: 'tanker', count: 2, interval: 5.0, start: 6.0 },
            { type: 'boss', count: 1, interval: 0, start: 14.0 }],
    ];
    const groups = defs[Math.min(wi, defs.length - 1)];
    const events = [];
    for (const g of groups) {
        for (let i = 0; i < g.count; i++) {
            events.push({ type: g.type, t: g.start + i * g.interval });
        }
    }
    return events.sort((a, b) => a.t - b.t);
}
// ── Helpers ───────────────────────────────────────────────────────────────────
function cellCentre(col, row) {
    return { x: col * CX + CX / 2, y: HH + row * CY + CY / 2 };
}
function tileRange(tiles) { return tiles * Math.min(CX, CY); }
function dist2(ax, ay, bx, by) {
    return (ax - bx) ** 2 + (ay - by) ** 2;
}
function dist(ax, ay, bx, by) {
    return Math.sqrt(dist2(ax, ay, bx, by));
}
// ── TowerDefence class ────────────────────────────────────────────────────────
export class TowerDefence {
    _ov = null;
    _cv = null;
    _ctx = null;
    _raf = 0;
    _last = 0;
    _done = null;
    _cfg;
    // ── Game state ───────────────────────────────────────────────────────────────
    _phase = 'announce';
    _waveIdx = 0;
    _lives = 5;
    _sats = 0;
    _towers = [];
    _enemies = [];
    _projs = [];
    _texts = [];
    _selectedCrew = null;
    _selectedTower = null; // tower id
    _nextId = 0;
    // Wave spawning
    _spawnQueue = [];
    _spawnTime = 0;
    _spawnIdx = 0;
    _allSpawned = false;
    _waveSpeedMult = 1.0;
    // Timers
    _announceTimer = 3;
    _prepTimer = 10;
    _betweenTimer = 3;
    _endTimer = 4;
    // Economy / stats
    _payoutBonus = 0;
    _totalEarned = 0;
    _wavesCleared = 0;
    // ── Public API ────────────────────────────────────────────────────────────────
    show(config, onComplete) {
        this.hide();
        this._cfg = config;
        this._done = onComplete;
        this._sats = config.payout;
        this._totalEarned = config.payout;
        this._buildUI();
        this._reset();
        this._loop();
    }
    hide() {
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = 0;
        }
        this._ov?.remove();
        this._ov = null;
        this._cv = null;
        this._ctx = null;
        this._done = null;
    }
    // ── DOM setup ─────────────────────────────────────────────────────────────────
    _buildUI() {
        const ov = document.createElement('div');
        ov.id = 'td-overlay';
        ov.style.cssText = `
      position:fixed;inset:0;z-index:14000;background:#0d0d18;
      display:flex;align-items:center;justify-content:center;
      touch-action:none;user-select:none;
    `;
        const cv = document.createElement('canvas');
        cv.width = CW;
        cv.height = CH;
        cv.style.cssText = `
      display:block;
      width:min(100vw, ${CW / CH * 100}vh);
      max-width:${CW}px;
      height:auto;
      cursor:pointer;
    `;
        // ── Input handlers ──────────────────────────────────────────────────────────
        const toCanvas = (cx, cy) => {
            const r = cv.getBoundingClientRect();
            return {
                x: (cx - r.left) * (CW / r.width),
                y: (cy - r.top) * (CH / r.height),
            };
        };
        cv.addEventListener('click', (e) => this._click(toCanvas(e.clientX, e.clientY)));
        cv.addEventListener('touchend', (e) => {
            e.preventDefault();
            if (e.changedTouches.length) {
                this._click(toCanvas(e.changedTouches[0].clientX, e.changedTouches[0].clientY));
            }
        }, { passive: false });
        ov.appendChild(cv);
        document.body.appendChild(ov);
        this._ov = ov;
        this._cv = cv;
        this._ctx = cv.getContext('2d');
    }
    // ── Game reset ────────────────────────────────────────────────────────────────
    _reset() {
        this._phase = 'announce';
        this._waveIdx = 0;
        this._lives = 5;
        this._towers = [];
        this._enemies = [];
        this._projs = [];
        this._texts = [];
        this._selectedCrew = null;
        this._selectedTower = null;
        this._nextId = 0;
        this._wavesCleared = 0;
        this._payoutBonus = 0;
        this._announceTimer = 3;
        this._prepTimer = 10;
        this._betweenTimer = 3;
        this._endTimer = 4;
        this._allSpawned = false;
        this._spawnIdx = 0;
        this._spawnTime = 0;
        this._waveSpeedMult = 1.0;
        this._spawnQueue = buildWave(0);
    }
    // ── Game loop ─────────────────────────────────────────────────────────────────
    _loop() {
        this._last = performance.now();
        const tick = (ts) => {
            if (!this._ov)
                return;
            const dt = Math.min((ts - this._last) / 1000, 0.05);
            this._last = ts;
            this._update(dt);
            this._draw();
            this._raf = requestAnimationFrame(tick);
        };
        this._raf = requestAnimationFrame(tick);
    }
    // ── Update ────────────────────────────────────────────────────────────────────
    _update(dt) {
        this._updateTexts(dt);
        switch (this._phase) {
            case 'announce':
                this._announceTimer -= dt;
                if (this._announceTimer <= 0) {
                    this._phase = 'prep';
                    this._prepTimer = 10;
                }
                break;
            case 'prep':
                this._prepTimer -= dt;
                this._updateMikayla(dt);
                if (this._prepTimer <= 0)
                    this._beginWave();
                break;
            case 'wave':
                this._updateSpawn(dt);
                this._updateEnemies(dt);
                this._updateTowers(dt);
                this._updateProjectiles(dt);
                this._updateMikayla(dt);
                this._checkWaveDone();
                break;
            case 'between':
                this._betweenTimer -= dt;
                if (this._betweenTimer <= 0) {
                    const next = this._waveIdx + 1;
                    if (next >= 5) {
                        this._phase = 'win';
                        this._endTimer = 4.5;
                        this._wavesCleared = 5;
                    }
                    else {
                        this._waveIdx = next;
                        this._phase = 'announce';
                        this._announceTimer = 3;
                        this._spawnQueue = buildWave(this._waveIdx);
                        this._spawnIdx = 0;
                        this._spawnTime = 0;
                        this._allSpawned = false;
                        this._waveSpeedMult = this._waveIdx >= 3 ? 1.2 : 1.0;
                    }
                }
                break;
            case 'win':
            case 'lose':
                this._endTimer -= dt;
                if (this._endTimer <= 0)
                    this._finish();
                break;
        }
    }
    _beginWave() {
        this._phase = 'wave';
        this._spawnQueue = buildWave(this._waveIdx);
        this._spawnIdx = 0;
        this._spawnTime = 0;
        this._allSpawned = false;
        this._waveSpeedMult = this._waveIdx >= 3 ? 1.2 : 1.0;
    }
    // ── Spawning ──────────────────────────────────────────────────────────────────
    _updateSpawn(dt) {
        if (this._allSpawned)
            return;
        this._spawnTime += dt;
        while (this._spawnIdx < this._spawnQueue.length &&
            this._spawnTime >= this._spawnQueue[this._spawnIdx].t) {
            this._spawnEnemy(this._spawnQueue[this._spawnIdx].type);
            this._spawnIdx++;
        }
        if (this._spawnIdx >= this._spawnQueue.length)
            this._allSpawned = true;
    }
    _spawnEnemy(type) {
        const d = E_DEFS[type];
        const py = HH + PR * CY + CY / 2;
        const spd = d.spd * BASE_SPD * this._waveSpeedMult;
        this._enemies.push({
            id: this._nextId++, type,
            x: -d.radius - 8, y: py,
            hp: d.hp, maxHp: d.hp,
            speed: spd, reward: d.reward,
            radius: d.radius, slowed: 0,
            color: this._cfg.rival.color,
        });
    }
    // ── Enemy movement ────────────────────────────────────────────────────────────
    _updateEnemies(dt) {
        // Phil path-block aura
        for (const t of this._towers) {
            if (t.crewId !== 'phil' || t.row !== PR)
                continue;
            for (const e of this._enemies) {
                if (Math.abs(e.x - t.x) < CX * 1.2) {
                    e.slowed = Math.max(e.slowed, 1.5);
                }
            }
        }
        for (let i = this._enemies.length - 1; i >= 0; i--) {
            const e = this._enemies[i];
            if (e.slowed > 0) {
                e.slowed -= dt;
                if (e.slowed < 0)
                    e.slowed = 0;
            }
            const spd = e.slowed > 0 ? e.speed * 0.4 : e.speed;
            e.x += spd * dt;
            if (e.x > CW + e.radius + 10) {
                this._enemies.splice(i, 1);
                this._lives = Math.max(0, this._lives - 1);
                this._addText(CW - 40, HH + PR * CY + CY / 2, '-1 ❤️', '#FF2244');
                if (this._lives <= 0) {
                    this._phase = 'lose';
                    this._endTimer = 4.5;
                    this._wavesCleared = this._waveIdx;
                }
            }
        }
    }
    // ── Tower firing ──────────────────────────────────────────────────────────────
    _updateTowers(dt) {
        for (const tower of this._towers) {
            const def = T_DEFS[tower.crewId];
            if (!def)
                continue;
            tower.fireTimer -= dt;
            if (tower.fireTimer > 0)
                continue;
            // Effective stats based on level
            const lvlMult = tower.level === 1 ? 1 : tower.level === 2 ? 1.5 : 2;
            const fireRate = def.fireRate * lvlMult * this._fabioBoost(tower);
            const cooldown = 1 / fireRate;
            const range = tileRange(def.range) * (1 + 0.15 * (tower.level - 1));
            const damage = def.damage * lvlMult;
            const target = this._findTarget(tower.x, tower.y, range);
            if (!target) {
                tower.fireTimer = 0.1;
                continue;
            } // retry soon
            tower.fireTimer = cooldown;
            // Connie AOE: fire at all enemies in range
            if (def.special === 'aoe') {
                for (const e of this._enemies) {
                    if (dist(tower.x, tower.y, e.x, e.y) <= range) {
                        this._shoot(tower.id, tower.x, tower.y, e, damage, tower.crewId, true);
                    }
                }
                // Connie uses crewId directly
                void 0;
            }
            else {
                let dmg = damage;
                // Jarrad: 50% double
                if (def.special === 'double' && Math.random() < 0.5) {
                    dmg *= 2;
                    this._addText(tower.x, tower.y - 16, 'DOUBLE! ✦', '#9B59B6');
                }
                this._shoot(tower.id, tower.x, tower.y, target, dmg, tower.crewId, false);
            }
        }
    }
    _fabioBoost(tower) {
        for (const t of this._towers) {
            if (t.crewId !== 'fabio' || t.id === tower.id)
                continue;
            const r = tileRange(T_DEFS.fabio.range) * (1 + 0.15 * (t.level - 1));
            if (dist(tower.x, tower.y, t.x, t.y) <= r)
                return 1 + 0.3 * t.level;
        }
        return 1;
    }
    _updateMikayla(dt) {
        for (const t of this._towers) {
            if (T_DEFS[t.crewId]?.special !== 'income')
                continue;
            t.incomeTimer -= dt;
            if (t.incomeTimer <= 0) {
                const income = 2000 * t.level;
                this._sats += income;
                this._totalEarned += income;
                this._addText(t.x, t.y - 20, `+${income / 1000}k 💰`, '#1ABC9C');
                t.incomeTimer = 10;
            }
        }
    }
    _findTarget(tx, ty, range) {
        let best = null;
        for (const e of this._enemies) {
            if (dist(tx, ty, e.x, e.y) > range)
                continue;
            if (!best || e.x > best.x)
                best = e;
        }
        return best;
    }
    _shoot(_towerId, tx, ty, target, damage, crewId, aoe) {
        const ang = Math.atan2(target.y - ty, target.x - tx);
        const spd = 300;
        this._projs.push({
            id: this._nextId++,
            x: tx, y: ty,
            vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
            damage, crewId, targetId: target.id, aoe,
        });
    }
    // ── Projectile movement & hits ────────────────────────────────────────────────
    _updateProjectiles(dt) {
        for (let i = this._projs.length - 1; i >= 0; i--) {
            const p = this._projs[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            if (p.x < -60 || p.x > CW + 60 || p.y < -60 || p.y > CH + 60) {
                this._projs.splice(i, 1);
                continue;
            }
            const target = this._enemies.find(e => e.id === p.targetId);
            if (!target) {
                this._projs.splice(i, 1);
                continue;
            }
            if (dist(p.x, p.y, target.x, target.y) > 14)
                continue;
            this._projs.splice(i, 1);
            this._hit(p, target);
        }
    }
    _hit(p, target) {
        // Jose slow
        if (p.crewId === 'jose') {
            target.slowed = 2.5;
            this._addText(target.x, target.y - 18, 'SLOW ❄', '#88AAFF');
        }
        target.hp -= p.damage;
        if (target.hp <= 0) {
            let reward = target.reward;
            // Joe double loot
            if (p.crewId === 'joe') {
                reward *= 2;
                this._addText(target.x, target.y - 22, 'INTEL BONUS!', '#E67E22');
            }
            // Matt payout bonus
            if (p.crewId === 'matt') {
                this._payoutBonus = Math.min(this._payoutBonus + 0.005, 0.5);
                this._addText(target.x, target.y - 18, '+0.5% 💼', '#4A90D9');
            }
            this._sats += reward;
            this._totalEarned += reward;
            this._addText(target.x, target.y - 22, `+${(reward / 1000).toFixed(0)}k`, '#FFD700');
            const idx = this._enemies.findIndex(e => e.id === target.id);
            if (idx >= 0)
                this._enemies.splice(idx, 1);
        }
        else {
            this._addText(target.x, target.y - 14, `-${Math.floor(p.damage)}`, '#FF7777');
        }
    }
    _checkWaveDone() {
        if (!this._allSpawned || this._enemies.length > 0 || this._phase !== 'wave')
            return;
        this._wavesCleared = this._waveIdx + 1;
        this._phase = 'between';
        this._betweenTimer = 3;
        this._addText(CW / 2, HH + GH / 2 - 20, `WAVE ${this._waveIdx + 1} CLEAR! 🎉`, '#2ECC40');
    }
    // ── Floating text ─────────────────────────────────────────────────────────────
    _addText(x, y, text, color) {
        this._texts.push({ x, y, text, life: 1.6, max: 1.6, color });
    }
    _updateTexts(dt) {
        for (let i = this._texts.length - 1; i >= 0; i--) {
            this._texts[i].life -= dt;
            if (this._texts[i].life <= 0)
                this._texts.splice(i, 1);
        }
    }
    // ── Click / touch handling ────────────────────────────────────────────────────
    _click(pt) {
        const { x, y } = pt;
        // Tray
        if (y >= CH - TH) {
            this._clickTray(x);
            return;
        }
        // HUD
        if (y < HH)
            return;
        // Upgrade panel (check before grid)
        if (this._selectedTower !== null) {
            const t = this._towers.find(tt => tt.id === this._selectedTower);
            if (t && this._clickPanel(x, y, t))
                return;
            this._selectedTower = null;
        }
        const col = Math.floor(x / CX);
        const row = Math.floor((y - HH) / CY);
        if (col < 0 || col >= COLS || row < 0 || row >= ROWS)
            return;
        const placed = this._towers.find(t => t.col === col && t.row === row);
        if (placed) {
            this._selectedTower = placed.id;
            this._selectedCrew = null;
            return;
        }
        // Place tower
        if (!this._selectedCrew || this._phase === 'win' || this._phase === 'lose')
            return;
        const isPhil = this._selectedCrew === 'phil';
        if (row === PR && !isPhil) {
            this._addText(x, y, 'PATH! 🚫', '#FF4444');
            return;
        }
        const def = T_DEFS[this._selectedCrew];
        if (!def)
            return;
        if (this._sats < def.cost) {
            this._addText(x, y, 'NOT ENOUGH SATS!', '#FF4444');
            return;
        }
        const { x: cx, y: cy } = cellCentre(col, row);
        this._towers.push({
            id: this._nextId++, crewId: this._selectedCrew,
            col, row, level: 1, fireTimer: 0,
            x: cx, y: cy, incomeTimer: 10,
        });
        this._sats -= def.cost;
        this._addText(cx, cy - 20, '📍 PLACED', def.color);
    }
    _clickTray(x) {
        const avail = this._cfg.crewIds.filter(id => T_DEFS[id]);
        const btnW = Math.min(72, CW / avail.length);
        const startX = (CW - btnW * avail.length) / 2;
        for (let i = 0; i < avail.length; i++) {
            const bx = startX + i * btnW;
            if (x >= bx && x < bx + btnW) {
                const id = avail[i];
                this._selectedCrew = (this._selectedCrew === id) ? null : id;
                this._selectedTower = null;
                return;
            }
        }
        this._selectedCrew = null;
    }
    _clickPanel(px, py, tower) {
        const def = T_DEFS[tower.crewId];
        const pcx = Math.min(Math.max(tower.x, 80), CW - 80);
        const pcy = Math.min(Math.max(tower.y - 55, HH + 5), CH - TH - 110);
        const upCost = Math.round(def.cost * (tower.level === 1 ? 1.5 : 2));
        const sellVal = Math.round(def.cost * (0.5 + 0.25 * (tower.level - 1)));
        const btnY1 = pcy + 34, btnY2 = pcy + 58;
        // Upgrade: left button
        if (px >= pcx - 58 && px <= pcx - 4 && py >= btnY1 && py <= btnY2) {
            if (tower.level < 3) {
                if (this._sats >= upCost) {
                    this._sats -= upCost;
                    tower.level++;
                    this._addText(tower.x, tower.y - 20, `⬆ LVL ${tower.level}!`, '#FFD700');
                }
                else {
                    this._addText(tower.x, tower.y, 'NOT ENOUGH SATS', '#FF4444');
                }
            }
            return true;
        }
        // Sell: right button
        if (px >= pcx + 4 && px <= pcx + 58 && py >= btnY1 && py <= btnY2) {
            this._sats += sellVal;
            this._addText(tower.x, tower.y, `SOLD +${(sellVal / 1000).toFixed(0)}k`, '#2ECC40');
            const idx = this._towers.findIndex(t => t.id === tower.id);
            if (idx >= 0)
                this._towers.splice(idx, 1);
            this._selectedTower = null;
            return true;
        }
        return false;
    }
    // ── Finish callback ───────────────────────────────────────────────────────────
    _finish() {
        if (!this._done)
            return;
        const won = this._phase === 'win';
        const qualityPct = won ? Math.min(1, 0.2 + 0.16 * this._lives) : 0;
        const earned = won ? Math.round(this._cfg.payout * qualityPct * (1 + this._payoutBonus)) : 0;
        const result = {
            won, earned, wavesCleared: this._wavesCleared, qualityPct,
        };
        const cb = this._done;
        this.hide();
        cb(result);
    }
    // ── Render ────────────────────────────────────────────────────────────────────
    _draw() {
        const ctx = this._ctx;
        if (!ctx)
            return;
        ctx.clearRect(0, 0, CW, CH);
        this._drawGrid(ctx);
        this._drawPath(ctx);
        this._drawTowers(ctx);
        this._drawEnemies(ctx);
        this._drawProjectiles(ctx);
        this._drawTexts(ctx);
        this._drawHUD(ctx);
        this._drawTray(ctx);
        this._drawUpgradePanel(ctx);
        // Phase overlays
        if (this._phase === 'announce')
            this._drawAnnounce(ctx);
        if (this._phase === 'prep')
            this._drawPrepHint(ctx);
        if (this._phase === 'between')
            this._drawBetween(ctx);
        if (this._phase === 'win')
            this._drawWin(ctx);
        if (this._phase === 'lose')
            this._drawLose(ctx);
    }
    // ── Grid ──────────────────────────────────────────────────────────────────────
    _drawGrid(ctx) {
        ctx.fillStyle = '#14141f';
        ctx.fillRect(0, HH, CW, GH);
        // Highlight placeable zones (subtle checker)
        for (let r = 0; r < ROWS; r++) {
            if (r === PR)
                continue;
            for (let c = 0; c < COLS; c++) {
                const shade = (c + r) % 2 === 0 ? '#1a1a2a' : '#161622';
                ctx.fillStyle = shade;
                ctx.fillRect(c * CX, HH + r * CY, CX, CY);
            }
        }
        // Grid lines
        ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        ctx.lineWidth = 1;
        for (let c = 0; c <= COLS; c++) {
            ctx.beginPath();
            ctx.moveTo(c * CX, HH);
            ctx.lineTo(c * CX, HH + GH);
            ctx.stroke();
        }
        for (let r = 0; r <= ROWS; r++) {
            ctx.beginPath();
            ctx.moveTo(0, HH + r * CY);
            ctx.lineTo(CW, HH + r * CY);
            ctx.stroke();
        }
        // Hover hint — highlight selected crew range on grid cells if crew is selected
        if (this._selectedCrew) {
            ctx.fillStyle = (T_DEFS[this._selectedCrew]?.color ?? '#ffffff') + '15';
            for (let r = 0; r < ROWS; r++) {
                if (r === PR && this._selectedCrew !== 'phil')
                    continue;
                const isPhilOnPath = r === PR && this._selectedCrew === 'phil';
                for (let c = 0; c < COLS; c++) {
                    if (!this._towers.find(t => t.col === c && t.row === r)) {
                        ctx.fillStyle = isPhilOnPath ? '#7F8C8D22' : ((T_DEFS[this._selectedCrew]?.color ?? '#ffffff') + '18');
                        ctx.fillRect(c * CX + 1, HH + r * CY + 1, CX - 2, CY - 2);
                    }
                }
            }
        }
    }
    // ── Path row ──────────────────────────────────────────────────────────────────
    _drawPath(ctx) {
        const py = HH + PR * CY;
        ctx.fillStyle = '#2a1e10';
        ctx.fillRect(0, py, CW, CY);
        // Direction arrows
        ctx.fillStyle = 'rgba(255,220,150,0.12)';
        for (let c = 0; c < COLS; c++) {
            const ax = c * CX + CX / 2;
            const ay = py + CY / 2;
            ctx.beginPath();
            ctx.moveTo(ax - 9, ay - 5);
            ctx.lineTo(ax + 2, ay - 5);
            ctx.lineTo(ax + 2, ay - 9);
            ctx.lineTo(ax + 11, ay);
            ctx.lineTo(ax + 2, ay + 9);
            ctx.lineTo(ax + 2, ay + 5);
            ctx.lineTo(ax - 9, ay + 5);
            ctx.closePath();
            ctx.fill();
        }
        // Labels
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#2ECC40';
        ctx.fillText('▶ START', CX / 2 + 2, py + 12);
        ctx.fillStyle = '#FF4444';
        ctx.fillText('🏚 BASE', CW - CX / 2, py + 12);
    }
    // ── Towers ────────────────────────────────────────────────────────────────────
    _drawTowers(ctx) {
        for (const tower of this._towers) {
            const def = T_DEFS[tower.crewId];
            if (!def)
                continue;
            const sel = this._selectedTower === tower.id;
            const r = 13 + tower.level * 2;
            // Cell tint
            ctx.fillStyle = def.color + '25';
            ctx.fillRect(tower.col * CX + 1, HH + tower.row * CY + 1, CX - 2, CY - 2);
            // Tower body
            ctx.beginPath();
            ctx.arc(tower.x, tower.y, r, 0, Math.PI * 2);
            ctx.fillStyle = def.color;
            ctx.fill();
            // Level rings
            for (let lv = 1; lv < tower.level; lv++) {
                ctx.beginPath();
                ctx.arc(tower.x, tower.y, r + 1 + lv * 2, 0, Math.PI * 2);
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
            // Selected highlight
            if (sel) {
                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 2.5;
                ctx.strokeRect(tower.col * CX + 1, HH + tower.row * CY + 1, CX - 2, CY - 2);
                // Range circle
                const range = tileRange(def.range) * (1 + 0.15 * (tower.level - 1));
                ctx.beginPath();
                ctx.arc(tower.x, tower.y, range, 0, Math.PI * 2);
                ctx.strokeStyle = def.color + '70';
                ctx.lineWidth = 1;
                ctx.setLineDash([5, 4]);
                ctx.stroke();
                ctx.setLineDash([]);
            }
            // Name label
            ctx.fillStyle = '#fff';
            ctx.font = `bold ${tower.level > 1 ? 7 : 8}px Arial`;
            ctx.textAlign = 'center';
            const short = def.name.split(' ')[0].slice(0, 5);
            ctx.fillText(short, tower.x, tower.y + r + 10);
            // Level badge
            if (tower.level > 1) {
                ctx.fillStyle = '#FFD700';
                ctx.font = 'bold 7px Arial';
                ctx.fillText(`L${tower.level}`, tower.x, tower.y + 4);
            }
        }
    }
    // ── Enemies ───────────────────────────────────────────────────────────────────
    _drawEnemies(ctx) {
        for (const e of this._enemies) {
            const r = e.radius;
            // Boss glow
            if (e.type === 'boss') {
                const grd = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r * 2.2);
                grd.addColorStop(0, e.color + '88');
                grd.addColorStop(1, 'transparent');
                ctx.fillStyle = grd;
                ctx.beginPath();
                ctx.arc(e.x, e.y, r * 2.2, 0, Math.PI * 2);
                ctx.fill();
            }
            // Body
            ctx.beginPath();
            ctx.arc(e.x, e.y, r, 0, Math.PI * 2);
            ctx.fillStyle = e.slowed > 0 ? '#8899DD' : e.color;
            ctx.fill();
            // Inner highlight
            ctx.beginPath();
            ctx.arc(e.x - r * 0.25, e.y - r * 0.25, r * 0.38, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,0.18)';
            ctx.fill();
            // Type label
            const icons = { grunt: 'G', runner: 'R', tanker: 'T', boss: '★' };
            ctx.fillStyle = '#fff';
            ctx.font = `bold ${Math.floor(r * 0.88)}px Arial`;
            ctx.textAlign = 'center';
            ctx.fillText(icons[e.type], e.x, e.y + r * 0.34);
            // HP bar
            const bw = r * 2.4;
            const bx = e.x - bw / 2;
            const by = e.y - r - 7;
            ctx.fillStyle = '#222';
            ctx.fillRect(bx, by, bw, 4);
            const pct = e.hp / e.maxHp;
            ctx.fillStyle = pct > 0.5 ? '#2ECC40' : pct > 0.25 ? '#FF8C00' : '#FF2244';
            ctx.fillRect(bx, by, bw * pct, 4);
        }
    }
    // ── Projectiles ───────────────────────────────────────────────────────────────
    _drawProjectiles(ctx) {
        for (const p of this._projs) {
            const col = T_DEFS[p.crewId]?.color ?? '#FFD700';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = col;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
            ctx.fillStyle = col + '44';
            ctx.fill();
        }
    }
    // ── Floating text ─────────────────────────────────────────────────────────────
    _drawTexts(ctx) {
        for (const t of this._texts) {
            const alpha = t.life / t.max;
            const rise = (1 - t.life / t.max) * 28;
            ctx.globalAlpha = alpha;
            ctx.fillStyle = t.color;
            ctx.font = 'bold 11px Arial Black, Arial';
            ctx.textAlign = 'center';
            ctx.fillText(t.text, t.x, t.y - rise);
        }
        ctx.globalAlpha = 1;
    }
    // ── HUD ───────────────────────────────────────────────────────────────────────
    _drawHUD(ctx) {
        // BG
        ctx.fillStyle = '#0a0a18';
        ctx.fillRect(0, 0, CW, HH);
        ctx.fillStyle = 'rgba(255,255,255,0.07)';
        ctx.fillRect(0, HH - 1, CW, 1);
        // Wave
        ctx.font = 'bold 13px Arial Black, Arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = '#FFD700';
        const waveLabel = this._phase === 'win' ? 'COMPLETE!' :
            this._phase === 'lose' ? 'STOLEN 😤' :
                `WAVE ${this._waveIdx + 1}/5`;
        ctx.fillText(waveLabel, 8, 22);
        // Phase sub-label
        ctx.font = '9px Arial';
        ctx.fillStyle = '#888';
        const sub = this._phase === 'announce' ? 'GET READY...' :
            this._phase === 'prep' ? `PREP — ${Math.ceil(this._prepTimer)}s` :
                this._phase === 'wave' ? 'DEFENDING...' :
                    this._phase === 'between' ? 'WAVE CLEAR!' : '';
        ctx.fillText(sub, 8, 37);
        // Rival name (center)
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = this._cfg.rival.color;
        ctx.fillText(`⚔️ vs ${this._cfg.rival.name}`, CW / 2, 18);
        // Hearts (right)
        ctx.font = '13px Arial';
        ctx.textAlign = 'right';
        ctx.fillStyle = this._lives > 2 ? '#FF4466' : '#FF0000';
        ctx.fillText('♥'.repeat(this._lives) + '♡'.repeat(Math.max(0, 5 - this._lives)), CW - 8, 22);
        // Sats
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#FFD700';
        ctx.fillText(`💰 ${(this._sats / 1000).toFixed(0)}k`, CW - 8, 39);
    }
    // ── Crew Tray ─────────────────────────────────────────────────────────────────
    _drawTray(ctx) {
        ctx.fillStyle = '#080812';
        ctx.fillRect(0, CH - TH, CW, TH);
        ctx.fillStyle = 'rgba(255,255,255,0.07)';
        ctx.fillRect(0, CH - TH, CW, 1);
        const avail = this._cfg.crewIds.filter(id => T_DEFS[id]);
        const btnW = Math.min(74, (CW - 8) / avail.length);
        const startX = (CW - btnW * avail.length) / 2;
        const by0 = CH - TH + 5;
        const bh = TH - 16;
        for (let i = 0; i < avail.length; i++) {
            const id = avail[i];
            const def = T_DEFS[id];
            if (!def)
                continue;
            const bx = startX + i * btnW + 2;
            const bw = btnW - 4;
            const sel = this._selectedCrew === id;
            const afford = this._sats >= def.cost;
            // BG
            ctx.fillStyle = sel ? def.color + '40' : '#0d0d22';
            this._rrect(ctx, bx, by0, bw, bh, 7);
            ctx.fill();
            // Border
            ctx.strokeStyle = sel ? '#FFD700' : def.color + '50';
            ctx.lineWidth = sel ? 2 : 1;
            this._rrect(ctx, bx, by0, bw, bh, 7);
            ctx.stroke();
            // Circle
            const cx2 = bx + bw / 2;
            const cy2 = by0 + 20;
            ctx.beginPath();
            ctx.arc(cx2, cy2, 13, 0, Math.PI * 2);
            ctx.fillStyle = afford ? def.color : '#333';
            ctx.fill();
            // Initial
            ctx.fillStyle = afford ? '#fff' : '#777';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(def.name[0], cx2, cy2 + 4);
            // Short name
            ctx.fillStyle = afford ? '#ccc' : '#555';
            ctx.font = '7px Arial';
            const short = def.name.split(' ')[0].slice(0, 7);
            ctx.fillText(short, cx2, by0 + 41);
            // Cost
            ctx.fillStyle = afford ? '#FFD700' : '#774400';
            ctx.font = 'bold 8px Arial';
            ctx.fillText(`${(def.cost / 1000).toFixed(0)}k`, cx2, by0 + 53);
        }
        // Instruction line
        ctx.fillStyle = '#444';
        ctx.font = '8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this._selectedCrew ? 'Tap grid cell to place • Tap again to deselect' : 'Tap a crew member to select', CW / 2, CH - 3);
    }
    // ── Upgrade panel ─────────────────────────────────────────────────────────────
    _drawUpgradePanel(ctx) {
        if (this._selectedTower === null)
            return;
        const tower = this._towers.find(t => t.id === this._selectedTower);
        if (!tower)
            return;
        const def = T_DEFS[tower.crewId];
        const pcx = Math.min(Math.max(tower.x, 80), CW - 80);
        const pcy = Math.min(Math.max(tower.y - 55, HH + 5), CH - TH - 110);
        const upCost = Math.round(def.cost * (tower.level === 1 ? 1.5 : 2));
        const sellVal = Math.round(def.cost * (0.5 + 0.25 * (tower.level - 1)));
        const atMax = tower.level >= 3;
        const canUp = !atMax && this._sats >= upCost;
        // Panel bg
        ctx.fillStyle = 'rgba(8,8,25,0.97)';
        ctx.strokeStyle = def.color;
        ctx.lineWidth = 2;
        this._rrect(ctx, pcx - 64, pcy, 128, 68, 9);
        ctx.fill();
        ctx.stroke();
        // Title
        ctx.fillStyle = def.color;
        ctx.font = 'bold 9px Arial Black, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${def.name}  Lv.${tower.level}`, pcx, pcy + 14);
        // Special
        ctx.fillStyle = '#888';
        ctx.font = '8px Arial';
        ctx.fillText(`✦ ${def.special}`, pcx, pcy + 26);
        // Upgrade btn
        ctx.fillStyle = canUp ? '#0e3010' : '#1a1a1a';
        ctx.strokeStyle = canUp ? '#2ECC40' : '#444';
        ctx.lineWidth = 1;
        this._rrect(ctx, pcx - 60, pcy + 32, 55, 26, 5);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = canUp ? '#2ECC40' : '#555';
        ctx.font = 'bold 8px Arial';
        ctx.fillText(atMax ? 'MAX' : `↑ ${(upCost / 1000).toFixed(0)}k`, pcx - 32, pcy + 48);
        // Sell btn
        ctx.fillStyle = '#2d0a00';
        ctx.strokeStyle = '#E67E22';
        ctx.lineWidth = 1;
        this._rrect(ctx, pcx + 5, pcy + 32, 55, 26, 5);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#E67E22';
        ctx.font = 'bold 8px Arial';
        ctx.fillText(`Sell ${(sellVal / 1000).toFixed(0)}k`, pcx + 32, pcy + 48);
    }
    // ── Phase overlays ────────────────────────────────────────────────────────────
    _drawAnnounce(ctx) {
        const my = HH + GH / 2;
        ctx.fillStyle = 'rgba(0,0,0,0.78)';
        ctx.fillRect(0, my - 58, CW, 116);
        ctx.strokeStyle = this._cfg.rival.color + '80';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, my - 58, CW, 116);
        ctx.font = 'bold 19px Arial Black, Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = this._cfg.rival.color;
        ctx.fillText(`⚔ WAVE ${this._waveIdx + 1} INCOMING`, CW / 2, my - 24);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px Arial';
        ctx.fillText(`— ${this._cfg.rival.name.toUpperCase()} —`, CW / 2, my - 4);
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 26px Arial Black, Arial';
        ctx.fillText(`${Math.ceil(this._announceTimer)}`, CW / 2, my + 30);
        ctx.fillStyle = '#888';
        ctx.font = '9px Arial';
        ctx.fillText('Place your towers while you can!', CW / 2, my + 48);
    }
    _drawPrepHint(ctx) {
        ctx.fillStyle = 'rgba(255,215,0,0.92)';
        ctx.font = 'bold 10px Arial Black, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`⏱ PREP: ${Math.ceil(this._prepTimer)}s — PLACE YOUR TOWERS!`, CW / 2, HH + 14);
    }
    _drawBetween(ctx) {
        const my = HH + GH / 2;
        ctx.fillStyle = 'rgba(0,25,8,0.78)';
        ctx.fillRect(0, my - 36, CW, 72);
        ctx.fillStyle = '#2ECC40';
        ctx.font = 'bold 18px Arial Black, Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`WAVE ${this._waveIdx + 1} CLEAR! 🎉`, CW / 2, my + 4);
        ctx.fillStyle = '#aaa';
        ctx.font = '10px Arial';
        ctx.fillText(`Next wave in ${Math.ceil(this._betweenTimer)}s`, CW / 2, my + 22);
    }
    _drawWin(ctx) {
        ctx.fillStyle = 'rgba(0,16,4,0.92)';
        ctx.fillRect(0, 0, CW, CH);
        const my = CH / 2;
        ctx.font = 'bold 26px Arial Black, Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#2ECC40';
        ctx.fillText('CONTRACT SECURED! 🏆', CW / 2, my - 55);
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('All 5 waves cleared!', CW / 2, my - 26);
        ctx.fillStyle = '#FF4466';
        ctx.font = 'bold 13px Arial';
        ctx.fillText(`Lives remaining: ${'❤️'.repeat(this._lives)}`, CW / 2, my + 2);
        const qPct = Math.round(Math.min(1, 0.2 + 0.16 * this._lives) * 100);
        ctx.fillStyle = '#aaa';
        ctx.font = '12px Arial';
        ctx.fillText(`Quality: ${qPct}%  •  Sats: ${(this._totalEarned / 1000).toFixed(0)}k`, CW / 2, my + 28);
        ctx.fillStyle = '#555';
        ctx.font = '10px Arial';
        ctx.fillText('Heading to the job site...', CW / 2, my + 52);
    }
    _drawLose(ctx) {
        ctx.fillStyle = 'rgba(30,0,0,0.92)';
        ctx.fillRect(0, 0, CW, CH);
        const my = CH / 2;
        ctx.font = 'bold 24px Arial Black, Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#FF2244';
        ctx.fillText('CONTRACT STOLEN 😤', CW / 2, my - 50);
        ctx.fillStyle = this._cfg.rival.color;
        ctx.font = 'bold 13px Arial';
        ctx.fillText(`${this._cfg.rival.name} won the contract.`, CW / 2, my - 22);
        ctx.fillStyle = '#aaa';
        ctx.font = '12px Arial';
        ctx.fillText(`Waves cleared: ${this._wavesCleared} / 5`, CW / 2, my + 4);
        ctx.fillText('Better luck next time, mate.', CW / 2, my + 26);
    }
    // ── Utilities ─────────────────────────────────────────────────────────────────
    // Rounded-rect path helper (avoids ctx.roundRect compatibility issues)
    _rrect(ctx, x, y, w, h, r) {
        r = Math.min(r, w / 2, h / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
    }
}
