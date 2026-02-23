import { PortraitRenderer } from './PortraitRenderer';
/**
 * White cloud speech bubble with character portrait.
 * Pops up above the controls when a character speaks.
 */
export class SpeechBubble {
    container;
    portrait;
    nameEl;
    textEl;
    portraitRenderer;
    hideTimeout = null;
    visible = false;
    constructor() {
        this.portraitRenderer = new PortraitRenderer();
        this._injectStyles();
        this._buildDOM();
    }
    _injectStyles() {
        if (document.getElementById('speech-bubble-styles'))
            return;
        const style = document.createElement('style');
        style.id = 'speech-bubble-styles';
        style.textContent = `
      #tem-speech-bubble {
        position: fixed;
        left: 0;
        top: 0;
        /* transform is set dynamically to position above character */
        transform: translate(-50%, -115%) scale(0.85);
        display: none;
        align-items: flex-end;
        gap: 14px;
        background: #ffffff;
        border-radius: 22px;
        padding: 12px 18px 12px 12px;
        box-shadow: 0 6px 28px rgba(0,0,0,0.28), 0 1px 4px rgba(0,0,0,0.12);
        border: 2.5px solid #e8e8e8;
        width: 290px;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.18s ease, transform 0.18s ease;
        pointer-events: none;
      }
      #tem-speech-bubble.sb-visible {
        opacity: 1;
        transform: translate(-50%, -115%) scale(1);
      }
      /* Tail pointing downward */
      #tem-speech-bubble::after {
        content: '';
        position: absolute;
        bottom: -16px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 16px solid #ffffff;
        filter: drop-shadow(0 3px 2px rgba(0,0,0,0.08));
      }
      /* Border tail (slightly larger, sits behind) */
      #tem-speech-bubble::before {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 0; height: 0;
        border-left: 14px solid transparent;
        border-right: 14px solid transparent;
        border-top: 19px solid #e8e8e8;
      }
      .sb-portrait-wrap {
        position: relative;
        flex-shrink: 0;
      }
      .sb-portrait-img {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        border: 3px solid #f0f0f0;
        background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
        object-fit: cover;
        display: block;
      }
      .sb-text-area {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        flex: 1;
        min-width: 0;
      }
      .sb-name {
        font-family: system-ui, -apple-system, sans-serif;
        font-weight: 800;
        font-size: 13px;
        color: #222;
        text-transform: uppercase;
        letter-spacing: 0.6px;
      }
      .sb-text {
        font-family: system-ui, -apple-system, sans-serif;
        font-size: 14px;
        color: #111;
        line-height: 1.45;
        word-wrap: break-word;
      }
    `;
        document.head.appendChild(style);
    }
    _buildDOM() {
        this.container = document.createElement('div');
        this.container.id = 'tem-speech-bubble';
        // Portrait
        const portraitWrap = document.createElement('div');
        portraitWrap.className = 'sb-portrait-wrap';
        this.portrait = document.createElement('img');
        this.portrait.className = 'sb-portrait-img';
        portraitWrap.appendChild(this.portrait);
        // Text
        const textArea = document.createElement('div');
        textArea.className = 'sb-text-area';
        this.nameEl = document.createElement('span');
        this.nameEl.className = 'sb-name';
        this.textEl = document.createElement('span');
        this.textEl.className = 'sb-text';
        textArea.appendChild(this.nameEl);
        textArea.appendChild(this.textEl);
        this.container.appendChild(portraitWrap);
        this.container.appendChild(textArea);
        document.body.appendChild(this.container);
    }
    show(config, text) {
        this.nameEl.textContent = config.name;
        this.textEl.textContent = text;
        this.portrait.src = this.portraitRenderer.renderPortrait(config);
        this.container.style.display = 'flex';
        // Tiny rAF delay so transition fires
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.container.classList.add('sb-visible');
            });
        });
        this.visible = true;
        if (this.hideTimeout !== null)
            clearTimeout(this.hideTimeout);
        this.hideTimeout = window.setTimeout(() => this.hide(), 10000);
    }
    /** Update bubble anchor to sit above the given screen-space point (character head). */
    setScreenPosition(screenX, screenY) {
        this.container.style.left = `${screenX}px`;
        this.container.style.top = `${screenY}px`;
    }
    hide() {
        this.container.classList.remove('sb-visible');
        this.visible = false;
        setTimeout(() => {
            if (!this.visible)
                this.container.style.display = 'none';
        }, 220);
    }
    isVisible() {
        return this.visible;
    }
    dispose() {
        this.portraitRenderer.dispose();
        document.body.removeChild(this.container);
    }
}
