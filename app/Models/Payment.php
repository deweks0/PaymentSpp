<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
    public function officer()
    {
        return $this->belongsTo(Guard::class);
    }
    public function tuition()
    {
        return $this->belongsTo(Tuition::class);
    }
}
