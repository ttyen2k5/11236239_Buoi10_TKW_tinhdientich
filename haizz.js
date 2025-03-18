function updateInputs() {
    const shape = document.querySelector('input[name="shape"]:checked').value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = "";
    
    if (shape === "rectangle") {
        inputsDiv.innerHTML = `
            <label>Chiều dài:</label>
            <input type="number" id="length" placeholder="Nhập chiều dài">
            <label>Chiều rộng:</label>
            <input type="number" id="width" placeholder="Nhập chiều rộng">
        `;
    } else if (shape === "circle") {
        inputsDiv.innerHTML = `
            <label>Bán kính:</label>
            <input type="number" id="radius" placeholder="Nhập bán kính">
        `;
    } else if (shape === "triangle") {
        inputsDiv.innerHTML = `
            <label>Cạnh a:</label>
            <input type="number" id="a" placeholder="Nhập cạnh a">
            <label>Cạnh b:</label>
            <input type="number" id="b" placeholder="Nhập cạnh b">
            <label>Cạnh c:</label>
            <input type="number" id="c" placeholder="Nhập cạnh c">
        `;
    }
}

function calculate() {
    const shape = document.querySelector('input[name="shape"]:checked').value;
    let area = 0, perimeter = 0;

    if (shape === "rectangle") {
        let length = parseFloat(document.getElementById("length").value);
        let width = parseFloat(document.getElementById("width").value);
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Vui lòng nhập giá trị hợp lệ!");
            return;
        }
        area = length * width;
        perimeter = 2 * (length + width);
    } 
    else if (shape === "circle") {
        let radius = parseFloat(document.getElementById("radius").value);
        if (isNaN(radius) || radius <= 0) {
            alert("Vui lòng nhập giá trị hợp lệ!");
            return;
        }
        area = Math.PI * radius * radius;
        perimeter = 2 * Math.PI * radius;
    } 
    else if (shape === "triangle") {
        let a = parseFloat(document.getElementById("a").value);
        let b = parseFloat(document.getElementById("b").value);
        let c = parseFloat(document.getElementById("c").value);
        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || (a + b <= c) || (a + c <= b) || (b + c <= a)) {
            alert("Vui lòng nhập giá trị hợp lệ! (Lưu ý: Tổng 2 cạnh phải lớn hơn cạnh còn lại)");
            return;
        }
        let s = (a + b + c) / 2;
        area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        perimeter = a + b + c;
    }

    document.getElementById("result").innerText = `Diện tích: ${area.toFixed(2)} - Chu vi: ${perimeter.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", updateInputs);
