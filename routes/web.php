<?php

use App\Models\Designation;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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
    return view('welcome');
});

Route::post('/testing',function(Request $request){
    $file = $request->file('data');
    return response()->json($file, 200);
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::post('/add-designation', function (Request $request) {
    $designation = new Designation();
    $designation->name = $request->get('name');
    $designation->description = $request->get('description');
    if ($designation->save()) {
        return response()->json('success');
    } else {
        return response()->json('error');
    }
});

