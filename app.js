// plus and minus
var count = [];

$(".plus").click(function () {
    count.push("1");
    for (var i = 0; i < (count).length; i++)
        $(".zero").html("<p>" + (i + 1) + "</p>");

    if (count.length > 0) {
        $(".cart-btn").html(' <span class="material-symbols-outlined cart-icon">    shopping_cart  </span>  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">    ' + count.length + '    <span class="visually-hidden">unread messages</span>  </span>')
    } else {
        $(".cart-btn").html(' <span class="material-symbols-outlined cart-icon">    shopping_cart  </span> ')
    }
})

$(".minus").click(function () {
    count.pop();
    for (var i = (count).length; i > -1; i = i - i - 1)
        $(".zero").html("<p>" + i + "</p>");

    if (count.length > 0) {
        $(".cart-btn").html(' <span class="material-symbols-outlined cart-icon">    shopping_cart  </span>  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">    ' + count.length + '    <span class="visually-hidden">unread messages</span>  </span>')
    } else {
        $(".cart-btn").html(' <span class="material-symbols-outlined cart-icon">    shopping_cart  </span> ')
    }
})





// cart

$(".cart-btn").click(function () {

    if (count.length > 0) {
        $(".modal-body").removeClass("invisible");
        $(".cart-price").html('$125 x ' + count.length + ' <strong> $' + 125 * count.length + ' </strong>');

    } else {
        $("#modal-for-cart .modal-body").addClass("invisible");
    }


    $(".modal-backdrop").addClass("trans-bg");

})

$(".remove-btn").click(function(){
    $("#modal-for-cart .modal-body").addClass("invisible");
    $(".zero").html("<p>0</p>");
    $(".cart-btn").html(' <span class="material-symbols-outlined cart-icon">    shopping_cart  </span> ')
    count = [];
})


// main-product-img
var thumbnailimg1 = $(".thumbnail-img1");
var thumbnailimg2 = $(".thumbnail-img2");
var thumbnailimg3 = $(".thumbnail-img3");
var thumbnailimg4 = $(".thumbnail-img4");



thumbnailimg1.click(function () {
    $(".main-product-img").html('<img src="images/image-product-1.jpg" alt="" class="product-main-img "></img>');
    thumbnailimg1.addClass("thumbnail-img-selected");
    thumbnailimg2.removeClass("thumbnail-img-selected");
    thumbnailimg3.removeClass("thumbnail-img-selected");
    thumbnailimg4.removeClass("thumbnail-img-selected");
})

thumbnailimg2.click(function () {
    $(".main-product-img").html('<img src="images/image-product-2.jpg" alt="" class="product-main-img "></img>');
    thumbnailimg2.addClass("thumbnail-img-selected");
    thumbnailimg1.removeClass("thumbnail-img-selected");
    thumbnailimg3.removeClass("thumbnail-img-selected");
    thumbnailimg4.removeClass("thumbnail-img-selected");
})

thumbnailimg3.click(function () {
    $(".main-product-img").html('<img src="images/image-product-3.jpg" alt="" class="product-main-img "></img>');
    thumbnailimg3.addClass("thumbnail-img-selected");
    thumbnailimg1.removeClass("thumbnail-img-selected");
    thumbnailimg2.removeClass("thumbnail-img-selected");
    thumbnailimg4.removeClass("thumbnail-img-selected");
})

thumbnailimg4.click(function () {
    $(".main-product-img").html('<img src="images/image-product-4.jpg" alt="" class="product-main-img "></img>');
    thumbnailimg4.addClass("thumbnail-img-selected");
    thumbnailimg1.removeClass("thumbnail-img-selected");
    thumbnailimg2.removeClass("thumbnail-img-selected");
    thumbnailimg3.removeClass("thumbnail-img-selected");
})
