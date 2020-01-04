var trace1 = {
  type: 'carpet',
  a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6].map(a => a * 1e-6),
  b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map(b => b * 1e6),
  y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
  aaxis: {
    tickprefix: 'a = ',
    ticksuffix: 'm',
    smoothing: 1,
    minorgridcount: 9,
  },
  baxis: {
    tickprefix: 'b = ',
    ticksuffix: 'Pa',
    smoothing: 1,
    minorgridcount: 9,
  }
}

var trace2 = {
  type: 'scattercarpet',
  a: [4, 4.5, 5, 6].map(a => a * 1e-6),
  b: [1.5, 2.5, 1.5, 2.5].map(b => b * 1e6),
  line: {shape: 'spline', smoothing: 1}
}

var data = [trace1,trace2]

Plotly.plot('myDiv', data)
