<?php


use App\Models\User;
use Tests\TestCase;

final class UserSignInTest extends TestCase
{
    public function test_admin_user_can_sign_into_the_system()
    {
        // A - Arrange
        $adminUser = User::factory()->create();

        // A - Action
        $response = $this->post('api/user-sign-in');

        // A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure();
    }
}
