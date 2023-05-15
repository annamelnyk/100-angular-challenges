import { CreditCardEncriptedPipe } from './credit-card-encripted.pipe';

describe('CreditCardEncriptedPipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardEncriptedPipe();
    expect(pipe).toBeTruthy();
  });
});
