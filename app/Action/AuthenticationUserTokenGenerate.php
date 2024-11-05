<?php

namespace App\Action;

use App\Models\User;

class AuthenticationUserTokenGenerate
{

    public static function generate(User $user): string
    {
        $roleMapping = [
            1 => ['token_name' => 'admin', 'ability' => ['server:admin']],
            2 => ['token_name' => 'manager', 'ability' => ['server:manager']],
        ];

        if (isset($roleMapping[$user->role_as])) {

            $tokenData = $roleMapping[$user->role_as];

            return $user->createToken($tokenData['token_name'], $tokenData['ability'])->plainTextToken;
        }

        return '';

    }

}
