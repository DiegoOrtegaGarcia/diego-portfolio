
export type IconName = 'home' | 'user' | 'folder' | 'code' | 'sun' | 'moon';

export interface navButtonProp{
    button:{id: string, icon: IconName, label: string,},
    darkMode:boolean
}