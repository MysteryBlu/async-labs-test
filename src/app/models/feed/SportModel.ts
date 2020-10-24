export class SportModel {
  id: number;
  icon: string;
  name: string;
  slug: string;

  public static parseObject(object: any){
    return object.map(x => <SportModel>{
      icon: x.icon,
      id: x.id,
      name: x.name,
      slug: x.slug
    })
  }
}
