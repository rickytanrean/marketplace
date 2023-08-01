<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BankController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BlockController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ConfigController;
use App\Http\Controllers\NotifyController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\TripayController;
use App\Http\Controllers\UpdateController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MailConfigController;
use App\Http\Controllers\PasswordResetController;

use App\Http\Controllers\Frontend\CartController;
use App\Http\Controllers\Frontend\CustomerController;
use App\Http\Controllers\Frontend\ReviewController;
use App\Http\Controllers\Frontend\FrontApiController;
use App\Http\Controllers\Frontend\ShippingController;
use App\Http\Controllers\Frontend\FrontOrderController;
use App\Http\Controllers\Frontend\FrontProductController;
use App\Http\Controllers\UserAddressController;

Route::middleware(['auth:sanctum', 'auth.admin'])->group(function() {
    Route::get('users', [UserController::class, 'index']);
    Route::get('users/search/{key}', [UserController::class, 'search']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);
    Route::get('products/promo/{promoId}', [ProductController::class, 'productPromo']);
    Route::get('products/search/{key}', [ProductController::class, 'searchProducts']);
    Route::get('products/varians/{productId}', [ProductController::class, 'productVarians']);
    Route::apiResource('products', ProductController::class);
    Route::apiResource('sliders', SliderController::class);
    Route::post('slider/update-weight', [SliderController::class, 'updateWeight']);
    Route::post('shop', [StoreController::class, 'update']);    
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('posts', PostController::class);
    Route::apiResource('blocks', BlockController::class);
    Route::apiResource('banks', BankController::class);
    Route::delete('orders/{id}', [OrderController::class, 'destroy']);
    Route::get('orders', [OrderController::class, 'index']);
    Route::post('orders/search', [OrderController::class, 'searchAdminOrder']);
    Route::put('orders', [OrderController::class, 'update']);
    Route::post('order/update-status', [OrderController::class, 'updateStatusOrder']);
    Route::post('order/accept-payment/{id}', [OrderController::class, 'paymentAccepted']);
    Route::post('order/input-resi', [OrderController::class, 'inputResi']);
    Route::post('cancelOrder/{id}', [OrderController::class, 'cancelOrder']);
    Route::get('orders/{orderRef}',[OrderController::class, 'show']);
    Route::get('update', [UpdateController::class, 'overview']);
    Route::post('update', [UpdateController::class, 'update']);  
    Route::post('clearCache', [UpdateController::class, 'clearCache']);  
    Route::get('promo/detail/{id}', [PromoController::class, 'promoDetail']);
    Route::post('promo/remove', [PromoController::class, 'removeProductPromo']);
    Route::post('promo/submit-product', [ProductController::class, 'submitProductPromo']);
    Route::get('promo/products/{promoId}', [ProductController::class, 'getProductPromo']);
    Route::get('promo/find-product', [ProductController::class, 'findProductWithoutPromo']);
    Route::apiResource('promos', PromoController::class);
    Route::get('telegram-test', [NotifyController::class, 'testingTelegram']);
    Route::get('mail-test', [NotifyController::class, 'testingEmail']);
    Route::get('config-email', [MailConfigController::class, 'show']);
    Route::post('config-email', [MailConfigController::class, 'update']);
    Route::get('reviews/{type}', [ReviewController::class, 'index']);
    Route::post('reviews', [ReviewController::class, 'publish']);
    Route::delete('reviews/{id}', [ReviewController::class, 'destroy']);
});

Route::middleware('auth:sanctum')->group(function() {
    Route::get('admin-config', [ConfigController::class, 'adminConfig']);
    Route::post('config', [ConfigController::class, 'update']);
    Route::get('user', [UserController::class, 'show']);
    Route::post('user/logout', [UserController::class, 'logout']);
    Route::post('user/update', [UserController::class, 'update']);
    Route::get('customer/orders', [CustomerController::class, 'getOrders']);

    Route::apiResource('user-address', UserAddressController::class)->except('show');
});

Route::middleware(['throttle:auth'])->group(function() {
    Route::post('user/login', [UserController::class, 'login']);
    Route::post('user/register', [UserController::class, 'register']);
    Route::post('user/password-token', [PasswordResetController::class, 'requestPasswordToken']);
    Route::get('user/validate-token/{token}', [PasswordResetController::class, 'validateToken']);
    Route::post('user/password-reset', [PasswordResetController::class, 'resetPassword']);
});

Route::get('getInitialData', [FrontApiController::class, 'getInitialData']);
Route::get('clear-cache', [FrontApiController::class, 'clearCache']);
Route::get('getPost/{slug}', [FrontApiController::class, 'getPostDetail']);
Route::get('promote-posts', [FrontApiController::class, 'getPromotePosts']);
Route::get('getCategories', [FrontApiController::class, 'getCategories']);
Route::get('getPosts', [FrontApiController::class, 'getPosts']);
Route::get('getSliders', [FrontApiController::class, 'getSliders']);
Route::get('getProducts', [FrontProductController::class, 'getProducts']);
Route::get('product-detail/{slug}', [FrontProductController::class, 'productDetail']);
Route::post('product-favorites', [FrontProductController::class, 'getProductsFavorites']);
Route::get('product-category', [FrontProductController::class, 'productsByCategory']);
Route::get('product-search/{key}', [FrontProductController::class, 'searchProduct']);
Route::post('product-review', [ReviewController::class, 'store']);
Route::get('product-review/{id}', [ReviewController::class, 'show']);
Route::post('storeorder', [FrontOrderController::class, 'storeOrder']);
Route::get('invoice/{invoice}', [FrontOrderController::class, 'getInvoice']);
Route::post('order-search', [FrontOrderController::class, 'searchOrder']);
Route::get('order-random', [FrontOrderController::class, 'getRandomOrder']);
Route::get('getBanks', [FrontApiController::class, 'getBanks']);
Route::post('notify-order', [NotifyController::class, 'sendOrderNotify']);
Route::post('carts/clear', [CartController::class, 'clear']);
Route::apiResource('carts', CartController::class);
Route::post('shipping/waybill', [ShippingController::class, 'waybill']);
Route::get('shipping/findSubdistrict/{key}', [ShippingController::class, 'findSubdistrict']);
Route::get('shipping/provinces', [ShippingController::class, 'getProvince']);
Route::get('shipping/cities/province_id}', [ShippingController::class, 'getCity']);
Route::get('shipping/subdistrics/{city_id}', [ShippingController::class, 'getSubdistrict']);
Route::post('shipping/costs', [ShippingController::class, 'getCost']);
Route::get('shop', [FrontApiController::class, 'getShop']);
Route::get('config',[FrontApiController::class, 'getConfig']);
Route::post('tripay/callback',[TripayController::class, 'callback'])->name('tripay.callback');
Route::get('tripay/payment-chanel',[TripayController::class, 'getPaymentChanels']);
