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

function addCar(img, nameCar, price) {

    // Tạo div chính
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");

    // Phần hình ảnh
    const myImg = document.createElement("div");
    myImg.setAttribute("class", "product-image");

    const image = document.createElement("img");
    image.setAttribute("src", img);
    image.setAttribute("alt", nameCar);           // ← Sửa lỗi ở đây
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



    const productList = document.getElementById("product-list");
        productList.appendChild(myDiv);
        document.body.appendChild(myDiv);   // fallback
}
