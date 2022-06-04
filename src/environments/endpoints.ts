export function endpoints(host: string) {

    //resolver problema do apontamento pro servidor
    return {
      login: `${host}` + '/token',
      student: 'http://localhost:8080/api/v1/student/',
      teacher: 'http://localhost:8080/api/v1/teacher/',
      //user: ''
    }
  }