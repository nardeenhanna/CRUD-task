import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  create(createCategoryDto: any) {
    return 'This action adds a new category';
  }

  findAll() {
    return 'This action returns all categories';
  }

  findOne(id: number) {
    return `This action returns category #${id}`;
  }

  update(id: number, updateCategoryDto: any) {
    return `This action updates category #${id}`;
  }

  remove(id: number) {
    return `This action removes category #${id}`;
  }
}