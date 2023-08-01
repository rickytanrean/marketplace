<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class MailConfigServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

        try {
            if (Schema::hasTable('mail_configs')) {
                $mail = DB::table('mail_configs')->first();
                
                if ($mail && $mail->is_active) //checking if table is not empty
                {
    
                    $smtp = array(
                        'transport' => 'smtp',
                        'host'       => $mail->smtp_host,
                        'port'       => $mail->smtp_port,
                        'encryption' => $mail->smtp_encryption,
                        'username'   => $mail->smtp_username,
                        'password'   => $mail->smtp_password,
                        'timeout' => null,
                        'auth_mode' => null,
                    );
                    
                    $mailFrom  = array('address' => $mail->from_address, 'name' => $mail->from_name);
    
                    Config::set('mail.mailers.smtp', $smtp);
                    Config::set('mail.from', $mailFrom);
                    
                }
            }
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
