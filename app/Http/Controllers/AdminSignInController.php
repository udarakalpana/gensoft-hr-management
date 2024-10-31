<?php

namespace App\Http\Controllers;

use App\Action\GetUser;
use App\Http\Requests\AdminUserSignInRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class AdminSignInController extends Controller
{
    public function adminSignIn(AdminUserSignInRequest $request): JsonResponse
    {
        $validatedLoginDetails = $request->validated();

        return response()->json(GetUser::execute($validatedLoginDetails));
    }
}
