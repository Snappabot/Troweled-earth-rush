import bpy
import math

# Clear scene
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete()

# === MATERIALS ===
def mat(name, r, g, b, metallic=0.0, roughness=0.6):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    n = m.node_tree.nodes["Principled BSDF"]
    n.inputs["Base Color"].default_value = (r, g, b, 1)
    n.inputs["Metallic"].default_value = metallic
    n.inputs["Roughness"].default_value = roughness
    return m

mat_body  = mat("body",  0.15, 0.16, 0.17, metallic=0.4, roughness=0.4)
mat_glass = mat("glass", 0.1,  0.15, 0.2,  metallic=0.0, roughness=0.05)
mat_wrap  = mat("wrap",  0.55, 0.28, 0.12)
mat_rack  = mat("rack",  0.08, 0.08, 0.08)
mat_tyre  = mat("tyre",  0.05, 0.05, 0.05)
mat_wheel = mat("wheel", 0.2,  0.2,  0.22, metallic=0.6, roughness=0.3)
mat_light = mat("light", 0.9,  0.85, 0.7)

def add_box(name, loc, dims, material):
    bpy.ops.mesh.primitive_cube_add(location=loc)
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (dims[0]/2, dims[1]/2, dims[2]/2)
    bpy.ops.object.transform_apply(scale=True)
    obj.data.materials.append(material)
    return obj

# === VAN BODY ===
add_box("cargo",    (0.55,  0, 0.82),  (3.2,  1.88, 1.64), mat_body)
add_box("cab",      (-1.45, 0, 0.72),  (1.1,  1.88, 1.44), mat_body)
add_box("cab_top",  (-1.05, 0, 1.48),  (0.5,  1.88, 0.22), mat_body)
add_box("bumper_f", (-2.08, 0, 0.28),  (0.18, 1.82, 0.28), mat_body)
add_box("bumper_r", (2.18,  0, 0.28),  (0.14, 1.82, 0.24), mat_body)
add_box("underbody",(0.2,   0, 0.12),  (4.2,  1.78, 0.12), mat_body)

# === SIDE WRAP PANEL ===
add_box("wrap_panel", (0.9, 0.952, 0.9), (2.4, 0.01, 1.1), mat_wrap)

# === WINDOWS ===
add_box("windscreen",  (-1.72, 0,     1.02), (0.05, 1.54, 0.72), mat_glass)
add_box("pass_win",    (-1.52, 0.945, 0.88), (0.56, 0.02, 0.44), mat_glass)
add_box("cargo_win",   (0.8,   0.945, 0.92), (1.6,  0.02, 0.72), mat_glass)

# === ROOF RACK ===
for i, y in enumerate([-0.82, -0.42, 0, 0.42, 0.82]):
    add_box(f"rack_cross_{i}", (0.6, y,     1.67), (2.8,  0.05, 0.04), mat_rack)
for side in [-0.88, 0.88]:
    add_box(f"rack_rail",      (0.6, side,  1.67), (2.8,  0.04, 0.05), mat_rack)

# === HEADLIGHTS ===
add_box("hl_l", (-1.98,  0.6,  0.7), (0.08, 0.44, 0.24), mat_light)
add_box("hl_r", (-1.98, -0.6,  0.7), (0.08, 0.44, 0.24), mat_light)

# === WHEELS ===
for i, (wx, wy) in enumerate([(1.1, 1.08), (1.1, -1.08), (-1.1, 1.08), (-1.1, -1.08)]):
    bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=0.34, depth=0.22,
        location=(wx, wy, 0.34), rotation=(math.pi/2, 0, 0))
    bpy.context.active_object.name = f"tyre_{i}"
    bpy.context.active_object.data.materials.append(mat_tyre)
    bpy.ops.mesh.primitive_cylinder_add(vertices=12, radius=0.22, depth=0.24,
        location=(wx, wy, 0.34), rotation=(math.pi/2, 0, 0))
    bpy.context.active_object.name = f"rim_{i}"
    bpy.context.active_object.data.materials.append(mat_wheel)

# Frame all objects in viewport
bpy.ops.object.select_all(action="SELECT")
print("TEM Van built! Parts:", len(bpy.context.selected_objects))
