import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customers.dto.js';

@Injectable()
export class CustomersService {

  private customers = [
    {
      id: 1,
      name: 'Ahmed Ali',
      email: 'ahmed@gmail.com',
      phone: '01012345678',
    },
    {
      id: 2,
      name: 'Sara Mohamed',
      email: 'sara@gmail.com',
      phone: '01123456789',
    },
    {
      id: 3,
      name: 'Omar Hassan',
      email: 'omar@gmail.com',
      phone: '01234567890',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  create(createCustomerDto: CreateCustomerDto) {
    const newCustomer = {
      id: this.customers.length + 1,
      ...createCustomerDto,
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }
}