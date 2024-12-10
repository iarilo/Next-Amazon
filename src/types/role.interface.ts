

export interface IRole  {
[x: string]: any
roleLoc: {
	userId: number,
	 nameRole: string, 
	 roleId: number,
	  role: ICreateRole
	}


 
}

export interface ICreateRole  {
   	id:number, 
	name: string,
	permissions: IPermissions[]
}

export interface IPermissions  {
	resource: string
	actions: string[]
}