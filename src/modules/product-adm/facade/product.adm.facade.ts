import type UseCaseInterface from '../../shared/usecase/usecase.interface'

import type ProductAdmFacadeInterface from './product.adm.facade.interface'
import { type CheckStockFacadeInputDTO, type AddProductFacadeInputDTO, type CheckStockFacadeOutputDTO } from './product.adm.facade.interface'

export interface UseCasesProps {
  addUseCase: UseCaseInterface
  stockUseCase: UseCaseInterface
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface {
  private readonly _addUsecase: UseCaseInterface
  private readonly _checkStockUsecase: UseCaseInterface

  constructor (usecasesProps: UseCasesProps) {
    this._addUsecase = usecasesProps.addUseCase
    this._checkStockUsecase = usecasesProps.stockUseCase
  }

  async addProduct (input: AddProductFacadeInputDTO): Promise<void> {
    return await this._addUsecase.execute(input)
  }

  async checkStock (
    input: CheckStockFacadeInputDTO
  ): Promise<CheckStockFacadeOutputDTO> {
    return await this._checkStockUsecase.execute(input)
  }
}
