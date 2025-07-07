export async function login(username: string, password: string) {
  // Simulación de verificación (en la vida real, consultarías una API o DB)
  if (username === 'admin' && password === '123456') {
    return {
      id: 1,
      username: 'admin',
      name: 'Administrador',
    };
  }

  throw new Error('Usuario o contraseña incorrectos');
}
