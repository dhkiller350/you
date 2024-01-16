import ctypes
p = (ctypes.c_char).from_address(0)
while True:
  p[0] = 0
  p = p + 1
