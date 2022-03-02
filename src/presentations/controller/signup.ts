import { HttpResponse, HttpRequest } from '../../presentations/protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email']
    for (const item of requiredField) {
      if (!httpRequest.body[item]) {
        return badRequest(new MissingParamError(item))
      }
    }
    return {
      statusCode: 200,
      body: ''
    }
  }
}
