

    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var height = canvas.height;
        var width = canvas.width;

        var block_width = block_height = height/2;

        ctx.fillStyle = "rgb(89,42,113)";
        ctx.fillRect (0, 0, block_width, block_height);

        ctx.fillStyle = "rgb(138,46,96)";
        ctx.fillRect (block_width, 0, block_width, block_height);

        ctx.fillStyle = "rgb(122,158,53)";
        ctx.fillRect (2*block_width, 0, block_width, block_height);

        ctx.fillStyle = "rgb(168,170,57)";
        ctx.fillRect (3*block_width,0, block_width, block_height);


        ctx.fillStyle = "rgb( 170,60, 57)";
        ctx.fillRect (0, block_height, block_width, block_height);

        ctx.fillStyle = "rgb(170,109,57)";
        ctx.fillRect (block_width, block_height, block_width, block_height);

        ctx.fillStyle = "rgb(35,100,103)";
        ctx.fillRect (2*block_width, block_height, block_width, block_height);

        ctx.fillStyle = "rgb(45,134,50)";
        ctx.fillRect (3*block_width, block_height, block_width, block_height);



      }
    }
