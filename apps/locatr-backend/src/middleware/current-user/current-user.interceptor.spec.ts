import { CurrentUserInterceptor } from './audit-fields.interceptor';

describe('AuditFieldsInterceptor', () => {
  it('should be defined', () => {
    expect(new CurrentUserInterceptor()).toBeDefined();
  });
});
