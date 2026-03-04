import bpy
import bmesh
import math

scene = bpy.context.scene
col = scene.collection

for obj in list(col.objects):
    if obj.type == 'MESH':
        col.objects.unlink(obj)
        bpy.data.objects.remove(obj, do_unlink=True)

def make_mat(name, r, g, b, metallic=0.0, roughness=0.6, alpha=1.0):
    if name in bpy.data.materials:
        return bpy.data.materials[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    n = m.node_tree.nodes["Principled BSDF"]
    n.inputs["Base Color"].default_value = (r, g, b, 1)
    n.inputs["Metallic"].default_value = metallic
    n.inputs["Roughness"].default_value = roughness
    if alpha < 1.0:
        n.inputs["Alpha"].default_value = alpha
        m.blend_method = 'BLEND'
    return m

# Jet black with slight metallic sheen
mat_body   = make_mat("body",   0.02, 0.02, 0.02, metallic=0.3, roughness=0.3)
mat_glass  = make_mat("glass",  0.08, 0.12, 0.16, metallic=0.0, roughness=0.05, alpha=0.35)
mat_rack   = make_mat("rack",   0.05, 0.05, 0.05, metallic=0.8, roughness=0.3)
mat_tyre   = make_mat("tyre",   0.03, 0.03, 0.03, roughness=0.95)
mat_wheel  = make_mat("wheel",  0.20, 0.20, 0.22, metallic=0.85, roughness=0.2)
mat_light  = make_mat("light",  0.95, 0.92, 0.75)
mat_grille = make_mat("grille", 0.06, 0.06, 0.06, metallic=0.5, roughness=0.5)
mat_rubber = make_mat("rubber", 0.06, 0.06, 0.06, roughness=0.9)
mat_chrome = make_mat("chrome", 0.8,  0.8,  0.8,  metallic=1.0, roughness=0.05)

def link_obj(name, mesh):
    obj = bpy.data.objects.new(name, mesh)
    col.objects.link(obj)
    return obj

def add_bm_box(name, x, y, z, w, d, h, bevel=0.04, mat=None):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1)
    for v in bm.verts:
        v.co.x = v.co.x * w + x
        v.co.y = v.co.y * d + y
        v.co.z = v.co.z * h + z
    bmesh.ops.bevel(bm, geom=list(bm.edges),
        offset=bevel, segments=3, profile=0.6, affect='EDGES')
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    mesh.validate()
    if mat:
        mesh.materials.append(mat)
    bm.free()
    return link_obj(name, mesh)

def add_cyl(name, x, y, z, radius, depth, mat, verts=24):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False,
        segments=verts, radius1=radius, radius2=radius, depth=depth)
    for v in bm.verts:
        v.co.x, v.co.y, v.co.z = v.co.x + x, v.co.z + y, v.co.y + z
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    mesh = bpy.data.meshes.new(name)
    bm.to_mesh(mesh)
    mesh.validate()
    if mat:
        mesh.materials.append(mat)
    bm.free()
    return link_obj(name, mesh)

# ── MAIN BODY — Renault Trafic X82 proportions ──────────────────────────────
# Cargo box (rear 2/3 of van — tall, boxy)
bm = bmesh.new()
verts = [
    # Bottom ring
    (-0.05, -0.93, 0.20), (2.10, -0.93, 0.20),
    (2.10,   0.93, 0.20), (-0.05,  0.93, 0.20),
    # Top ring
    (-0.05, -0.93, 1.68), (2.10, -0.93, 1.68),
    (2.10,   0.93, 1.68), (-0.05,  0.93, 1.68),
]
bv = [bm.verts.new(v) for v in verts]
bm.faces.new([bv[0],bv[1],bv[2],bv[3]])
bm.faces.new([bv[7],bv[6],bv[5],bv[4]])
bm.faces.new([bv[0],bv[4],bv[5],bv[1]])
bm.faces.new([bv[3],bv[2],bv[6],bv[7]])
bm.faces.new([bv[1],bv[5],bv[6],bv[2]])
bm.faces.new([bv[0],bv[3],bv[7],bv[4]])
bmesh.ops.bevel(bm, geom=list(bm.edges), offset=0.05, segments=3, profile=0.5, affect='EDGES')
bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
mesh = bpy.data.meshes.new("cargo")
bm.to_mesh(mesh)
mesh.validate()
mesh.materials.append(mat_body)
bm.free()
link_obj("cargo", mesh)

# Cab body — Trafic has a distinctive stepped profile
# Lower cab section
bm2 = bmesh.new()
cab_v = [
    # Bottom
    (-2.05, -0.92, 0.20), (-0.05, -0.93, 0.20),
    (-0.05,  0.93, 0.20), (-2.05,  0.92, 0.20),
    # Waist (doors end ~0.9h)
    (-2.05, -0.90, 0.90), (-0.05, -0.93, 0.90),
    (-0.05,  0.93, 0.90), (-2.05,  0.90, 0.90),
    # Shoulder (window sill ~1.0h, body narrows slightly)
    (-2.02, -0.88, 1.05), (-0.05, -0.93, 1.68),
    (-0.05,  0.93, 1.68), (-2.02,  0.88, 1.05),
    # Roof (cab roof is flat, lower than cargo)
    (-1.92, -0.86, 1.62), (-0.05, -0.93, 1.68),
    (-0.05,  0.93, 1.68), (-1.92,  0.86, 1.62),
]
cv = [bm2.verts.new(v) for v in cab_v]
# Faces
bm2.faces.new([cv[0],cv[1],cv[2],cv[3]])   # bottom
bm2.faces.new([cv[0],cv[4],cv[5],cv[1]])   # left lower
bm2.faces.new([cv[3],cv[2],cv[6],cv[7]])   # right lower
bm2.faces.new([cv[4],cv[8],cv[9],cv[5]])   # left mid
bm2.faces.new([cv[7],cv[6],cv[10],cv[11]]) # right mid
bm2.faces.new([cv[8],cv[12],cv[13],cv[9]]) # left upper
bm2.faces.new([cv[11],cv[10],cv[14],cv[15]])# right upper
bm2.faces.new([cv[12],cv[15],cv[14],cv[13]])# roof
bm2.faces.new([cv[0],cv[3],cv[7],cv[4]])   # front lower
bm2.faces.new([cv[4],cv[7],cv[11],cv[8]])  # front mid
bm2.faces.new([cv[8],cv[11],cv[15],cv[12]])# front upper
bmesh.ops.remove_doubles(bm2, verts=bm2.verts, dist=0.01)
bmesh.ops.recalc_face_normals(bm2, faces=bm2.faces)
mesh2 = bpy.data.meshes.new("cab")
bm2.to_mesh(mesh2)
mesh2.validate()
mesh2.materials.append(mat_body)
bm2.free()
link_obj("cab", mesh2)

# Hood — slopes down from cab to front
bm3 = bmesh.new()
hood_v = [
    (-2.05, -0.90, 0.52), (-1.92, -0.88, 0.90),
    (-1.92,  0.88, 0.90), (-2.05,  0.90, 0.52),
    (-2.15, -0.88, 0.52), (-2.15,  0.88, 0.52),
]
hv = [bm3.verts.new(v) for v in hood_v]
bm3.faces.new([hv[0],hv[1],hv[2],hv[3]])
bm3.faces.new([hv[4],hv[0],hv[3],hv[5]])
bmesh.ops.recalc_face_normals(bm3, faces=bm3.faces)
mesh3 = bpy.data.meshes.new("hood")
bm3.to_mesh(mesh3)
mesh3.validate()
mesh3.materials.append(mat_body)
bm3.free()
link_obj("hood", mesh3)

# ── WINDSCREEN — Trafic has a very upright raked screen ─────────────────────
bm4 = bmesh.new()
ws_v = [
    (-2.05, -0.82, 0.72), (-1.92, -0.86, 1.05),
    (-1.92,  0.86, 1.05), (-2.05,  0.82, 0.72),
    (-2.08, -0.80, 0.72), (-1.88, -0.86, 1.58),
    (-1.88,  0.86, 1.58), (-2.08,  0.80, 0.72),
]
wv = [bm4.verts.new(v) for v in ws_v]
bm4.faces.new([wv[0],wv[4],wv[7],wv[3]])
bm4.faces.new([wv[4],wv[5],wv[6],wv[7]])
bm4.faces.new([wv[0],wv[1],wv[5],wv[4]])
bmesh.ops.recalc_face_normals(bm4, faces=bm4.faces)
mesh4 = bpy.data.meshes.new("windscreen")
bm4.to_mesh(mesh4)
mesh4.validate()
mesh4.materials.append(mat_glass)
bm4.free()
link_obj("windscreen", mesh4)

# ── SIDE WINDOWS ─────────────────────────────────────────────────────────────
# Driver window
bm5 = bmesh.new()
dw = [bm5.verts.new(v) for v in [
    (-1.85, 0.895, 0.78), (-0.55, 0.940, 0.78),
    (-0.55, 0.940, 1.25), (-1.85, 0.895, 1.25),
]]
bm5.faces.new(dw)
bmesh.ops.recalc_face_normals(bm5, faces=bm5.faces)
mesh5 = bpy.data.meshes.new("driver_win")
bm5.to_mesh(mesh5)
mesh5.validate()
mesh5.materials.append(mat_glass)
bm5.free()
link_obj("driver_win", mesh5)

# Cargo side window
bm6 = bmesh.new()
cw = [bm6.verts.new(v) for v in [
    (0.10, 0.935, 0.72), (2.0, 0.935, 0.72),
    (2.0,  0.935, 1.55), (0.10, 0.935, 1.55),
]]
bm6.faces.new(cw)
bmesh.ops.recalc_face_normals(bm6, faces=bm6.faces)
mesh6 = bpy.data.meshes.new("cargo_win")
bm6.to_mesh(mesh6)
mesh6.validate()
mesh6.materials.append(mat_glass)
bm6.free()
link_obj("cargo_win", mesh6)

# ── FRONT END ─────────────────────────────────────────────────────────────────
# Lower front fascia
add_bm_box("front_fascia", -2.14,  0,  0.38, 0.10, 1.80, 0.42, bevel=0.03, mat=mat_body)
# Grille (wide horizontal bar)
add_bm_box("grille_main",  -2.17,  0,  0.36, 0.06, 1.60, 0.18, bevel=0.02, mat=mat_grille)
add_bm_box("grille_bar1",  -2.17,  0,  0.42, 0.04, 1.55, 0.03, bevel=0.01, mat=mat_chrome)
add_bm_box("grille_bar2",  -2.17,  0,  0.50, 0.04, 1.55, 0.03, bevel=0.01, mat=mat_chrome)
# Front bumper
add_bm_box("bumper_f",     -2.18,  0,  0.20, 0.08, 1.88, 0.20, bevel=0.04, mat=mat_rubber)
# Rear bumper
add_bm_box("bumper_r",      2.14,  0,  0.20, 0.06, 1.88, 0.20, bevel=0.04, mat=mat_rubber)

# Headlights — Trafic has swept angular units
add_bm_box("hl_l",  -2.16,  0.65, 0.82, 0.06, 0.40, 0.26, bevel=0.03, mat=mat_light)
add_bm_box("hl_r",  -2.16, -0.65, 0.82, 0.06, 0.40, 0.26, bevel=0.03, mat=mat_light)
add_bm_box("drl_l", -2.16,  0.65, 0.58, 0.05, 0.38, 0.06, bevel=0.01, mat=mat_chrome)
add_bm_box("drl_r", -2.16, -0.65, 0.58, 0.05, 0.38, 0.06, bevel=0.01, mat=mat_chrome)

# Tail lights
add_bm_box("tl_l",   2.13,  0.72, 0.80, 0.04, 0.28, 0.42, bevel=0.02, mat=mat_light)
add_bm_box("tl_r",   2.13, -0.72, 0.80, 0.04, 0.28, 0.42, bevel=0.02, mat=mat_light)

# ── MIRRORS ───────────────────────────────────────────────────────────────────
add_bm_box("mirror_l", -1.70,  1.08, 1.08, 0.24, 0.08, 0.10, bevel=0.02, mat=mat_body)
add_bm_box("mirror_r", -1.70, -1.08, 1.08, 0.24, 0.08, 0.10, bevel=0.02, mat=mat_body)

# ── ROOF RACK ─────────────────────────────────────────────────────────────────
for i, y in enumerate([-0.78, -0.38, 0, 0.38, 0.78]):
    add_bm_box(f"xbar{i}", 0.8, y, 1.74, 2.5, 0.04, 0.03, bevel=0.01, mat=mat_rack)
add_bm_box("rail_l",  0.8, -0.82, 1.74, 2.5, 0.03, 0.04, bevel=0.01, mat=mat_rack)
add_bm_box("rail_r",  0.8,  0.82, 1.74, 2.5, 0.03, 0.04, bevel=0.01, mat=mat_rack)

# ── WHEELS ────────────────────────────────────────────────────────────────────
for i, (wx, wy) in enumerate([(1.05,1.00),(1.05,-1.00),(-1.05,1.00),(-1.05,-1.00)]):
    add_cyl(f"tyre{i}",  wx, wy, 0.38, 0.38, 0.26, mat_tyre,  verts=28)
    add_cyl(f"rim{i}",   wx, wy, 0.38, 0.25, 0.28, mat_wheel, verts=16)
    add_bm_box(f"arch{i}", wx, wy*0.97, 0.50, 0.55, 0.06, 0.38, bevel=0.08, mat=mat_body)

# ── UNDERBODY ─────────────────────────────────────────────────────────────────
add_bm_box("underbody", 0.05, 0, 0.15, 4.0, 1.74, 0.10, bevel=0.03, mat=mat_body)

# ── SIDE STEP / SILL ──────────────────────────────────────────────────────────
add_bm_box("sill_l", 0.05,  1.00, 0.28, 3.8, 0.08, 0.12, bevel=0.02, mat=mat_rubber)
add_bm_box("sill_r", 0.05, -1.00, 0.28, 3.8, 0.08, 0.12, bevel=0.02, mat=mat_rubber)

print("TEM Van v3 — jet black Renault Trafic built!")
