<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::prefix('v1')->group(function ($router) {
    //public route
    Route::prefix('admin')->group(function () {
        
        Route::post('register', [AuthController::class,"register"])->name("register");
        Route::post('login', [AuthController::class,"login"])->name("login");
        //refresh token
        Route::post('refresh', [AuthController::class,"refresh"])->name("refresh");


    });

       // Routes available only for the authenticated users.
       Route::group(["middleware" => "auth:api", "prefix" => "admin"], function(){
        // logout user from application
        Route::post('logout', [AuthController::class,"logout"])->name("logout");
        // get user info
        Route::get("user", [AuthController::class,"user"])->name("user");
    });
    
});