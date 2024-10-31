<?php


use App\Action\GetUser;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

final class UserSignInTest extends TestCase
{
    use RefreshDatabase;
    public function test_admin_user_can_sign_into_the_system()
    {
        // A - Arrange
        $adminUser = User::factory()->create();

        $userLoginDetails = [
            'email' => $adminUser->email,
            'password' => '123456789'
        ];

        // A - Action
        $response = $this->post('api/user-sign-in', $userLoginDetails);

        dd($response->json());

        // A - Assertion
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'userName',
            'userRole',
            'userToken'
        ]);

    }

    public function test_if_not_existing_admin_user_should_want_to_return_bad_response()
    {
        $adminLoginDetails = [
            'email' => 'test@gmail.com',
            'password' => '12345678'
        ];

        $response = GetUser::execute($adminLoginDetails);

        $this->assertEquals(['status' => Response::HTTP_NOT_FOUND], $response);

    }
}
