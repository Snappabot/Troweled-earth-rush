import bpy
import math

scene = bpy.context.scene
col = scene.collection

# Remove all existing mesh objects
for obj in list(col.objects):
    if obj.type == 'MESH':
        col.objects.unlink(obj)
        bpy.data.objects.remove(obj, do_unlink=True)

def make_mat(name, r, g, b, metallic=0.0, roughness=0.6):
    if name in bpy.data.materials:
        return bpy.data.materials[name]
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    n = m.node_tree.nodes["Principled BSDF"]
    n.inputs["Base Color"].default_value = (r, g, b, 1)
    n.inputs["Metallic"].default_value = metallic
    n.inputs["Roughness"].default_value = roughness
    return m

mat_body  = make_mat("body",  0.15, 0.16, 0.17, metallic=0.4, roughness=0.4)
mat_glass = make_mat("glass", 0.1,  0.15, 0.2,  metallic=0.0, roughness=0.05)
mat_wrap  = make_mat("wrap",  0.55, 0.28, 0.12)
mat_rack  = make_mat("rack",  0.08, 0.08, 0.08)
mat_tyre  = make_mat("tyre",  0.05, 0.05, 0.05)
mat_wheel = make_mat("wheel", 0.2,  0.2,  0.22, metallic=0.6, roughness=0.3)
mat_light = make_mat("light", 0.9,  0.85, 0.7)

def add_box(name, loc, sx, sy, sz, mat):
    mesh = bpy.data.meshes.new(name)
    verts = [
        (-sx, -sy, -sz), ( sx, -sy, -sz), ( sx,  sy, -sz), (-sx,  sy, -sz),
        (-sx, -sy,  sz), ( sx, -sy,  sz), ( sx,  sy,  sz), (-sx,  sy,  sz),
    ]
    faces = [(0,1,2,3),(4,5,6,7),(0,1,5,4),(2,3,7,6),(0,3,7,4),(1,2,6,5)]
    mesh.from_pydata(verts, [], faces)
    mesh.validate()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = loc
    col.objects.link(obj)
    return obj

def add_cyl(name, loc, radius, depth, mat, verts=12):
    mesh = bpy.data.meshes.new(name)
    angle = 2 * math.pi / verts
    top    = [(radius * math.cos(i*angle), radius * math.sin(i*angle),  depth/2) for i in range(verts)]
    bottom = [(radius * math.cos(i*angle), radius * math.sin(i*angle), -depth/2) for i in range(verts)]
    all_v = top + bottom + [(0,0,depth/2),(0,0,-depth/2)]
    tc, bc = verts*2, verts*2+1
    faces = []
    for i in range(verts):
        n = (i+1) % verts
        faces.append((i, n, n+verts, i+verts))
        faces.append((tc, i, n))
        faces.append((bc, n+verts, i+verts))
    mesh.from_pydata(all_v, [], faces)
    mesh.validate()
    mesh.materials.append(mat)
    obj = bpy.data.objects.new(name, mesh)
    obj.location = loc
    obj.rotation_euler = (math.pi/2, 0, 0)
    col.objects.link(obj)
    return obj

# VAN BODY
add_box("cargo",    (0.55,  0, 0.82),  1.6,  0.94, 0.82, mat_body)
add_box("cab",      (-1.45, 0, 0.72),  0.55, 0.94, 0.72, mat_body)
add_box("cab_top",  (-1.05, 0, 1.48),  0.25, 0.94, 0.11, mat_body)
add_box("bumper_f", (-2.08, 0, 0.28),  0.09, 0.91, 0.14, mat_body)
add_box("bumper_r", (2.18,  0, 0.28),  0.07, 0.91, 0.12, mat_body)
add_box("floor",    (0.2,   0, 0.12),  2.1,  0.89, 0.06, mat_body)

# SIDE WRAP
add_box("wrap", (0.9, 0.952, 0.9), 1.2, 0.005, 0.55, mat_wrap)

# WINDOWS
add_box("windscreen", (-1.72, 0,     1.02), 0.025, 0.77, 0.36, mat_glass)
add_box("pass_win",   (-1.52, 0.945, 0.88), 0.28,  0.01, 0.22, mat_glass)
add_box("cargo_win",  (0.8,   0.945, 0.92), 0.8,   0.01, 0.36, mat_glass)

# ROOF RACK
for i, y in enumerate([-0.82, -0.42, 0, 0.42, 0.82]):
    add_box(f"xbar{i}", (0.6, y, 1.67), 1.4, 0.025, 0.02, mat_rack)
add_box("rail_l", (0.6, -0.88, 1.67), 1.4, 0.02, 0.025, mat_rack)
add_box("rail_r", (0.6,  0.88, 1.67), 1.4, 0.02, 0.025, mat_rack)

# HEADLIGHTS
add_box("hl_l", (-1.98,  0.6, 0.7), 0.04, 0.22, 0.12, mat_light)
add_box("hl_r", (-1.98, -0.6, 0.7), 0.04, 0.22, 0.12, mat_light)

# WHEELS
for i, (wx, wy) in enumerate([(1.1,1.08),(1.1,-1.08),(-1.1,1.08),(-1.1,-1.08)]):
    add_cyl(f"tyre{i}", (wx, wy, 0.34), 0.34, 0.22, mat_tyre, verts=16)
    add_cyl(f"rim{i}",  (wx, wy, 0.34), 0.22, 0.24, mat_wheel, verts=12)

print("TEM Van built!")
