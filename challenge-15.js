// Basic Mathematical Operations

function basicOp(op, v1, v2)
{
  if(op === '+')
    return v1+v2;
  if(op === '-')
    return v1-v2;
  if(op === '*')
    return v1*v2;
  if(op === '/')
    return v1/v2;
}

function basicOp(o, a, b) {
    return eval(a+o+b);
  }