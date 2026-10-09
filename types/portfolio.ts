export interface Project { id:string; number:string; title:string; subtitle:string; type:string; year:string; description:string; technologies:string[]; features:string[]; contribution:string; architecture:string[]; github?:string; liveUrl?:string }
export interface Job { company:string; role:string; period:string; summary:string; points:string[]; tech:string[] }
export interface SkillGroup { title:string; items:{name:string; hint:string}[] }
