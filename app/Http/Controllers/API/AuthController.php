<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|confirmed|min:6'
        ]);

        if ($v->fails()) {
            return response()->json([
                "status" => "error",
                "errors" => $v->errors()
            ], 422);
        }

        $user = new User([
            "name" => $request->name,
            "email" => $request->email,
            "password" => bcrypt($request->password)
        ]);
        $user->save();
        return response()->json([
            "message" => "Successfully created user."
        ], 201);
    }
}
