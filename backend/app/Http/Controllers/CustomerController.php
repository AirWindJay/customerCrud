<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        return Customer::all();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email',
            'contact_number' => 'required|string|max:20',
        ]);

        try {
            $customer = Customer::create($validatedData);
            return response()->json($customer, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to create customer'], 500);
        }
    }


    public function show(Customer $customer)
    {
        return $customer;
    }

    public function update(Request $request, Customer $customer)
    {
        $validatedData = $request->validate([
            'first_name' => 'sometimes|string|max:255',
            'last_name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:customers,email,' . $customer->id,
            'contact_number' => 'sometimes|string|max:15',
        ]);

        $customer->update($validatedData);
        return response()->json($customer, 200);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return response()->json(null, 204);
    }
}