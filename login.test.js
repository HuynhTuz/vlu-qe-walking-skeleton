const login = require('./login');

test('Dang nhap thanh cong voi admin va 123', () => {
  expect(login('admin', '123')).toBe(true);
});

test('Dang nhap that bai khi sai thong tin', () => {
  expect(login('admin', 'wrongpass')).toBe(false);
  expect(login('user', '123')).toBe(false);
});
