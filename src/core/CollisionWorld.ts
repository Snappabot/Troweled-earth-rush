// src/core/CollisionWorld.ts
export interface AABB {
  cx: number;  // world centre X
  cz: number;  // world centre Z
  hw: number;  // half-width (X axis)
  hd: number;  // half-depth (Z axis)
}

export class CollisionWorld {
  private boxes: AABB[] = [];
  // "Tight" boxes (e.g. parked cars) — resolved with a small fixed expansion
  // so they don't borrow the full van radius (which was designed for buildings)
  private tightBoxes: AABB[] = [];
  private static readonly TIGHT_EXPAND = 0.5; // half-expansion for tight boxes

  addBox(cx: number, cz: number, hw: number, hd: number): void {
    this.boxes.push({ cx, cz, hw, hd });
  }

  addTightBox(cx: number, cz: number, hw: number, hd: number): void {
    this.tightBoxes.push({ cx, cz, hw, hd });
  }

  /**
   * Resolve a circle (van) against all registered AABBs.
   * Returns corrected {x, z} position, sliding along walls.
   */
  resolveCircle(x: number, z: number, radius: number): { x: number; z: number } {
    let rx = x, rz = z;

    // Standard boxes — expand by full radius (buildings)
    for (const box of this.boxes) {
      const ex = box.hw + radius;
      const ez = box.hd + radius;
      const dx = rx - box.cx;
      const dz = rz - box.cz;
      if (Math.abs(dx) < ex && Math.abs(dz) < ez) {
        const overlapX = ex - Math.abs(dx);
        const overlapZ = ez - Math.abs(dz);
        if (overlapX < overlapZ) {
          rx += dx < 0 ? -overlapX : overlapX;
        } else {
          rz += dz < 0 ? -overlapZ : overlapZ;
        }
      }
    }

    // Tight boxes — fixed small expansion (parked cars etc.)
    for (const box of this.tightBoxes) {
      const ex = box.hw + CollisionWorld.TIGHT_EXPAND;
      const ez = box.hd + CollisionWorld.TIGHT_EXPAND;
      const dx = rx - box.cx;
      const dz = rz - box.cz;
      if (Math.abs(dx) < ex && Math.abs(dz) < ez) {
        const overlapX = ex - Math.abs(dx);
        const overlapZ = ez - Math.abs(dz);
        if (overlapX < overlapZ) {
          rx += dx < 0 ? -overlapX : overlapX;
        } else {
          rz += dz < 0 ? -overlapZ : overlapZ;
        }
      }
    }

    return { x: rx, z: rz };
  }
}
