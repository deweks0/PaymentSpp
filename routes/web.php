<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::middleware(['auth:sanctum','verified'])->group(function () {
    Route::prefix('admin')->group(function () {
        Route::resource('students', \App\Http\Controllers\StudentsController::class);
        Route::resource('guards', \App\Http\Controllers\OfficerController::class);
        Route::resource('classes', \App\Http\Controllers\ClassController::class);
        Route::resource('tuitions', \App\Http\Controllers\TuitionController::class);
    });
    Route::resource('payments', \App\Http\Controllers\PaymentController::class);
    Route::get('payments/getuser/{id}', [\App\Http\Controllers\PaymentController::class,'getUser'] )->name('payments.getUser');

});
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');
