let token;

describe('user.cy.js', () => {
  it('createuser', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3001/users/create',
      body: {
        username: 'test',
        password: 'test',
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  });

  it('loginuser', () => {
    // send post request as basic auth

    cy.request({
      method: 'POST',
      url: 'http://localhost:3001/users/login',
      auth: {
        username: 'test',
        password: 'test',
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      token = response.headers['set-cookie'][0].split(';')[0].split('=')[1]
      cy.setCookie('token', token)

    })
  })

  it('deleteuser', () => {
    cy.request({
      method: 'DELETE',
      url: 'http://localhost:3001/users/delete',
      headers: {
        Cookie: `token=${token}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

})