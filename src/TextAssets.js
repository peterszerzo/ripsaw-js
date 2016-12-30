RIPSAW.textAssets = {

  shapeLibrary: {

    'fork': 'M812.146,568.452c-52.453,1.613-75.052-19.368-75.052-19.368s25.041-21.028,75.859-20.174c71.82,1.211,104.502-31.494,104.502-31.494s-36.717-34.678-106.52-33.871c-57.942,0.672-72.765-19.906-72.765-19.906s11.267-17.453,58.642-16.405c73.03,1.612,132.834-23.802,132.834-23.802c-267.869-111.5-264.88,45.689-424.959,35.904C290.183,426.229,63.01,307.15,70.535,484.526c6.455,152.186,145.255,64.558,422.294,69.399c189.035,3.305,216.292,149.023,434.714,45.998C927.543,599.924,880.07,566.362,812.146,568.452z',
    'person': 'M75.303,533.052c6.047-65.575,80.289-100.945,124.724-54.667c49.041,51.07,127.95-12.528,71.852-141.562c-53.526-123.12,98.943-150.686,76.232-11.144C330.313,435.04,450.169,454.823,531.399,448.803c119.931-8.888,240.646-99.284,282.131-141.198c74.615-75.384,147.605,80.856,42.819,114.361c-102.57,32.796-177.442,45.126-174.202,107.489c3.158,60.764,63.259,100.824,165.825,102.922c139.445,2.85,65.561,197.484-31.098,111.666c-94.177-83.614-222.416-138.441-306.662-140.58C372.517,599.966,323.882,636.691,354.5,746.05c31.259,111.651-124.696,102.712-87.589,1.838c47.478-129.076,8.109-209.991-58.472-152.687C155.535,640.734,68.186,610.213,75.303,533.052z',
    'moustache': 'M745.947,405.463c106.682,88.078,192.916,26.735,192.916,26.735C754.697,759.384,501.959,567.383,501.959,567.383C272.733,769.18,61.138,463.543,61.138,463.543c56.816,43.103,128.065,50.273,186.069-7.729c58.006-58.005,162.409-123.742,254.752,27.065C560.734,350.4,659.676,334.236,745.947,405.463z'

  },

  SVGHeader: [

    '<svg version="1.1" id="trace" ',
    'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ',
    'viewBox="0 0 200 100" ',
    'style="enable-background:new 0 0 200 100;" xml:space="preserve" >'

  ].join('\n'),

  SVGFooter: '</svg>',

  rhinoPythonScriptHeader: [

    '\n"""\n\nScript file generated by Yourk, www.RIPSAW.com/Yourk/experiment_1',
    '\nInstructions:',
    '\t- copy this code and paste it into a *.py file',
    '\t- open Rhino (rhino3d.com). The software is currently in development for Mac and free to use. Commercial license is needed for Windows. [stay tuned for a SketchUp implementation]',
    '\t- type RunPythonScript in the Rhino command line, and select your file.',
    '\t- in the current development phase, the geometry generated by this script needs to be trimmed manually to obtain the final 3d model. Stay tuned for full automation.',
    '\t- Rhino exports seamlessly into .stl format, which is directly imported into MakerWare, the software used to send geometries to MakerBot 3d printers. Check out the image gallery under RIPSAW.com/design/Yourk/ for images of the very first Yourk 3d printing process.',
    '\n"""',
    '\nimport rhinoscriptsyntax as rs\n\nimport math\n\ndef Main():\n\n'

  ].join('\n'),

  rhinoPythonScriptFooter: 'Main()'

}
