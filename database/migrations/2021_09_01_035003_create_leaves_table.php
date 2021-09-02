<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeavesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leaves', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('employees')->onDelete('cascade');
            $table->foreignId('leave_type_id')->nullable()->constrained('leave_types')->onDelete('cascade');
            $table->dateTime('start_date')->nullable();
            $table->dateTime('end_date')->nullable();
            $table->text('leave_reason')->nullable();
            $table->foreignId('reference_by')->nullable()->constrained('employees')->onDelete('cascade');
            $table->tinyInteger('status')->default(2)->comment('1 = approved, 2 = pending, 0 = cancel');  # 1 = approved 2 = pending , 0 = cancel
            $table->dateTime('application_date')->nullable();
            $table->foreignId('approved_by')->nullable()->constrained('employees')->onDelete('cascade');
            $table->string('attach_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leaves');
    }
}
