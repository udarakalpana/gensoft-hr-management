<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminSignInController extends Controller
{
    public function adminSignIn(): JsonResponse
    {
        return response()->json();
    }
}
