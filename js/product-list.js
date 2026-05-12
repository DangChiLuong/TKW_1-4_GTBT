const productList = 
[
    {img: "../assets/images/Xe-VinF.png", id: "001", name: "Vin_Fast LUX 2.0", Made_in: "VietNam" ,price: "1.200.000.000VND"},
    {img: "../assets/images/E300.png", id: "002", name: "Merecedes E300",Made_in: "Đức", price: "3.000.000.000VND"},
    {img: "../assets/images/SU57.jpg", id: "003", name: "Chiến đâu cơ SU-57",Made_in: "Nga", price: "1.200.000.000USD"}
];

function loadAllproducts()
{
    for(let x in productList)
    {
        addCar(productList[x].img, 
                productList[x].name, 
                productList[x].price);
    }

}

function addCarFromForm() {
    const img = document.getElementById('car-img')?.value.trim() || '';
    const name = document.getElementById('car-name')?.value.trim() || '';
    const price = document.getElementById('car-price')?.value.trim() || '';

    if (!img || !name || !price) {
        alert('Bạn cần nhập đủ 3 thông tin: Ảnh, Tên xe, Giá');
        return;
    }

    addCar(img, name, price);

    // Xoá form sau khi thêm
    document.getElementById('car-img').value = '';
    document.getElementById('car-name').value = '';
    document.getElementById('car-price').value = '';
}

function addCar(img, nameCar, price) {

    // Tạo div chính
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");

    // Phần hình ảnh
    const myImg = document.createElement("div");
    myImg.setAttribute("class", "product-image");

    const image = document.createElement("img");
    image.setAttribute("src", img);
    image.setAttribute("alt", nameCar);
    myImg.appendChild(image);

    myDiv.appendChild(myImg);

    // Phần thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-Info");

    // Dòng tên xe
    const p1 = document.createElement("p");
    const text1 = document.createTextNode(nameCar);
    p1.appendChild(text1);
    myDiv2.appendChild(p1);

    // Dòng giá
    const p2 = document.createElement("p");
    const text2 = document.createTextNode("Giá: " + price);
    p2.appendChild(text2);
    myDiv2.appendChild(p2);

    // Link xem chi tiết
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    const textLink = document.createTextNode("Xem chi tiết");
    link.appendChild(textLink);
    myDiv2.appendChild(link);

    // Ghép phần thông tin vào div chính
    myDiv.appendChild(myDiv2);

    // Đưa card vào đúng vùng danh sách
    const container = document.getElementById('cards') || document.getElementById('product-list');
    if (container) container.appendChild(myDiv);
}

