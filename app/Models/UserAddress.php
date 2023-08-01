<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'is_primary',
        'label',
        'address',
    ];

    protected $casts = ['is_primary' => 'boolean'];

    public $timestamps = false;
}
