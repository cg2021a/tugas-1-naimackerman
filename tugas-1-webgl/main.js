function main() {
    /**
    * @type {HTMLCanvasElement} canvas
    */
    const canvas = document.getElementById('myCanvas');

    /**
     * @type {WebGLRenderingContext} gl
     */
    const gl = canvas.getContext('webgl');

    const objectKoperLeft = {
        leftColor_1 : [0.8, 0.0, 0.0],
        leftColor_2 : [0.4, 0.0, 0.0],
        leftColor_3 : [0.2, 0.2, 0.2],
        leftColor_4 : [0.0, 0.0, 0.0],
        pos_E : [-0.67948, 0.59154],
        pos_F : [-0.75, 0.5],
        pos_G : [-0.77291, 0.24314],
        pos_U : [-0.70333, 0.27128],
        pos_T : [-0.59845, 0.58689],
        pos_V : [-0.59243, 0.277],
        pos_S : [-0.51904, 0.57333],
        pos_A1 : [-0.48153, 0.3273],
        pos_R : [-0.51032, 0.59851],
        pos_B1 : [-0.47467, 0.38104],
        pos_Q : [-0.46868, 0.59561],
        pos_D1 : [-0.41865, 0.38332],
        pos_C1 : [-0.43123, 0.32616],
        pos_W : [-0.4781, 0.26556],
        pos_Z : [-0.37635, 0.26099],
        pos_P : [-0.45512, 0.56946],
        pos_O : [-0.3941, 0.54331],
        pos_N : [-0.32214, 0.2509],
        pos_M : [-0.45, -0.15],
        pos_L : [-0.49014, -0.18771],
        pos_K : [-0.5676, -0.194],
        pos_J : [-0.64021, -0.18841],
        pos_I : [-0.71355, -0.18506],
        pos_H : [-0.76415, -0.11012],
    };

    const objectKoperRight = {
        rightColor_1 : [0.8, 0.0, 0.0],
        rightColor_2 : [0.4, 0.0, 0.0],
        rightColor_3 : [0.2, 0.2, 0.2],
        rightColor_4 : [0.0, 0.0, 0.0],
        pos_E1 : [0.32242, 0.52529],
        pos_T1 : [0.35645, 0.54345],
        pos_U1 : [0.32989, 0.5065],
        pos_F1 : [0.25778, 0.45203],
        pos_V1 : [0.32527, 0.47532],
        pos_Z1 : [0.30523, 0.4211],
        pos_G1 : [0.23279, 0.38049],
        pos_H1 : [0.219, 0.29344],
        pos_A2 : [0.30275, 0.34956],
        pos_W1 : [0.29812, 0.27085],
        pos_I1 : [0.27775, -0.04738],
        pos_J1 : [0.30454, -0.07301],
        pos_S1 : [0.72136, 0.51227],
        pos_P1 : [0.75, 0.5],
        pos_R1 : [0.73983, 0.47532],
        pos_Q1 : [0.73753, 0.44876],
        pos_O1 : [0.80892, 0.41045],
        pos_B2 : [0.74522, 0.39253],
        pos_N1 : [0.82084, 0.34096],
        pos_B2 : [0.74522, 0.39253],
        pos_C2 : [0.75652, 0.31484],
        pos_M1 : [0.83197, 0.25193],
        pos_D2 : [0.75305, 0.22686],
        pos_K1 : [0.64695, -0.10329],
        pos_L1 : [0.69142, -0.0786],
    };

    const vertices = [
        // LEFT
        ...objectKoperLeft.pos_E, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_F, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_G, ...objectKoperLeft.leftColor_1,

        ...objectKoperLeft.pos_E, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_U, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_G, ...objectKoperLeft.leftColor_1,
        
        ...objectKoperLeft.pos_E, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_T, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_U, ...objectKoperLeft.leftColor_1,

        ...objectKoperLeft.pos_T, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_U, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_1,

        ...objectKoperLeft.pos_T, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_S, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_A1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_W, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_S, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_A1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_S, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_R, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_B1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_S, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_A1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_B1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_R, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_B1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_R, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_Q, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_Q, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_P, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_1,

        ...objectKoperLeft.pos_P, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_C1, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_A1, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_C1, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_W, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_C1, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_W, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_A1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_C1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_B1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_D1, ...objectKoperLeft.leftColor_3,
        ...objectKoperLeft.pos_A1, ...objectKoperLeft.leftColor_3,

        ...objectKoperLeft.pos_P, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_O, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_O, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_N, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,
        
        ...objectKoperLeft.pos_N, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_L, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_N, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_M, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_L, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_K, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_L, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_K, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_Z, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_W, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_K, ...objectKoperLeft.leftColor_4,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_4,
        ...objectKoperLeft.pos_W, ...objectKoperLeft.leftColor_4,

        ...objectKoperLeft.pos_K, ...objectKoperLeft.leftColor_4,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_4,
        ...objectKoperLeft.pos_J, ...objectKoperLeft.leftColor_4,

        ...objectKoperLeft.pos_U, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_V, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_J, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_U, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_I, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_J, ...objectKoperLeft.leftColor_2,

        ...objectKoperLeft.pos_U, ...objectKoperLeft.leftColor_1,
        ...objectKoperLeft.pos_I, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_G, ...objectKoperLeft.leftColor_1,

        ...objectKoperLeft.pos_H, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_I, ...objectKoperLeft.leftColor_2,
        ...objectKoperLeft.pos_G, ...objectKoperLeft.leftColor_1,

        // RIGHT
        ...objectKoperRight.pos_T1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_E1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_U1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_F1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_E1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_U1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_F1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_V1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_U1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_F1, ...objectKoperRight.rightColor_4,
        ...objectKoperRight.pos_V1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_G1, ...objectKoperRight.rightColor_4,

        ...objectKoperRight.pos_Z1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_V1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_G1, ...objectKoperRight.rightColor_4,

        ...objectKoperRight.pos_Z1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_H1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_G1, ...objectKoperRight.rightColor_2,

        ...objectKoperRight.pos_Z1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_H1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_A2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_W1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_H1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_A2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_W1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_H1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_J1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_I1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_H1, ...objectKoperRight.rightColor_2,
        ...objectKoperRight.pos_J1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_W1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_K1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_J1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_W1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_K1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_D2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_W1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_A2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_D2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_C2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_A2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_D2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_C2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_A2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_B2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_Z1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_A2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_B2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_Z1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_Q1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_B2, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_Z1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_Q1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_V1, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_R1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_Q1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_V1, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_R1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_U1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_V1, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_R1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_U1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_S1, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_T1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_U1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_S1, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_P1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_R1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_S1, ...objectKoperRight.rightColor_1,
        
        ...objectKoperRight.pos_P1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_R1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_O1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_Q1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_R1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_O1, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_Q1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_N1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_O1, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_Q1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_N1, ...objectKoperRight.rightColor_3,
        ...objectKoperRight.pos_B2, ...objectKoperRight.rightColor_3,

        ...objectKoperRight.pos_M1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_N1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_B2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_M1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_C2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_B2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_M1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_C2, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_D2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_M1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_K1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_D2, ...objectKoperRight.rightColor_1,

        ...objectKoperRight.pos_M1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_K1, ...objectKoperRight.rightColor_1,
        ...objectKoperRight.pos_L1, ...objectKoperRight.rightColor_1,
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick);

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }

    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0074;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[451] > 1.0 || vertices[921] < -1.0) {
            speed = speed * -1;
        }
        for (let i = 451; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        if (!freeze) {
            moveVertices();
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        
        change = change + speed;

        gl.uniform1f(uChange, change);

        gl.clearColor(0.8, 0.8, 0.8, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 186;

        gl.drawArrays(primitive, offset, nVertex);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}