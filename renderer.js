// Initialize the stage and layer.
const stage = new Konva.Stage({
    container: 'container',
    width: 800,
    height: 600
  })
  
  const layer = new Konva.Layer()
  stage.add(layer)
  
  // Create a new rectangle shape.
  const rect = new Konva.Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 100,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 2
  })
  
  // Add the rectangle shape to the layer and draw it on the canvas.
  layer.add(rect)
  layer.draw()
  