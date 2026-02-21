// src/core/CollisionWorld.ts
export interface AABB {
  cx: number;  // world centre X
  cz: number;  // world centre Z
  hw: number;  // half-width (X axis)
  hd: number;  // half-depth (Z axis)
}

export class CollisionWorld {
  private boxes: AABB[] = [];

  addBox(cx: number, cz: number, hw: number, hd: number): void {
    this.boxes.push({ cx, cz, hw, hd });
  }

  /**
   * Resolve a circle (van) against all registered AABBs.
   * Returns corrected {x, z} position, sliding along walls.
   */
  resolveCircle(x: number, z: number, radius: number): { x: number; z: number } {
    let rx = x, rz = z;
    for (const box of this.boxes) {
      // Expand box by radius (Minkowski sum)
      const ex = box.hw + radius;
      const ez = box.hd + radius;
      const dx = rx - box.cx;
      const dz = rz - box.cz;
      if (Math.abs(dx) < ex && Math.abs(dz) < ez) {
        // Inside — push out on shortest axis
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
