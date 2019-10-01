import { Injectable } from '@angular/core';
import { FunctionAppDetailsDto } from '@dtos';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private readonly functionApps: FunctionAppDetailsDto[] = [
    { id: "1", name: "Shopping Cart" },
    { id: "2", name: "Registration" },
    { id: "3", name: "Checkout" },
    { id: "4", name: "Recommendations" }
  ];

  constructor() { }

  getAllFunctionApps(): Observable<FunctionAppDetailsDto[]> {
    return of(this.functionApps);
  }
}
