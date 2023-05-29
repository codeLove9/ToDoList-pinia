declare interface listItemItf {
  id: number
  todo: string
  checked: boolean
}

declare type List = Array<listItemItf>
