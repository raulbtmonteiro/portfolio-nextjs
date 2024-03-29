// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Experiência documents */
interface ExperienciaDocumentData {
  /**
   * Company field in *Experiência*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experiencia.company
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  company: prismic.RichTextField;
  /**
   * Position field in *Experiência*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experiencia.position
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  position: prismic.RichTextField;
  /**
   * Description field in *Experiência*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experiencia.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Initial Date field in *Experiência*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experiencia.initial_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  initial_date: prismic.RichTextField;
  /**
   * Final Date field in *Experiência*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experiencia.final_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  final_date: prismic.RichTextField;
}
/**
 * Experiência document from Prismic
 *
 * - **API ID**: `experiencia`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienciaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienciaDocumentData>,
    "experiencia",
    Lang
  >;
/** Content for Intro documents */
interface IntroDocumentData {
  /**
   * Introduction field in *Intro*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.introduction
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  introduction: prismic.RichTextField;
  /**
   * Name field in *Intro*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Occupation field in *Intro*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.occupation
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  occupation: prismic.RichTextField;
}
/**
 * Intro document from Prismic
 *
 * - **API ID**: `intro`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IntroDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<IntroDocumentData>, "intro", Lang>;
/** Content for Projeto documents */
interface ProjetoDocumentData {
  /**
   * Name field in *Projeto*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projeto.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Project Image field in *Projeto*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projeto.project_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  project_image: prismic.ImageField<never>;
  /**
   * Description field in *Projeto*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projeto.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Stacks field in *Projeto*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projeto.stacks
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  stacks: prismic.RichTextField;
  /**
   * Is Done? field in *Projeto*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: projeto.is_done
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  is_done: prismic.BooleanField;
  /**
   * show field in *Projeto*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: projeto.show
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  show: prismic.BooleanField;
  /**
   * Deploy field in *Projeto*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projeto.deploy
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  deploy: prismic.LinkField;
  /**
   * Repository field in *Projeto*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: projeto.repository
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  repository: prismic.LinkField;
}
/**
 * Projeto document from Prismic
 *
 * - **API ID**: `projeto`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjetoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjetoDocumentData>,
    "projeto",
    Lang
  >;
/** Content for Sobre mim documents */
interface SobreMimDocumentData {
  /**
   * Profile Image field in *Sobre mim*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_mim.profile_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  profile_image: prismic.ImageField<never>;
  /**
   * Title field in *Sobre mim*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_mim.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Location field in *Sobre mim*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_mim.location
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  location: prismic.RichTextField;
  /**
   * Description field in *Sobre mim*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_mim.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Curriculo field in *Sobre mim*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: sobre_mim.curriculo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  curriculo: prismic.LinkField;
}
/**
 * Sobre mim document from Prismic
 *
 * - **API ID**: `sobre_mim`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SobreMimDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SobreMimDocumentData>,
    "sobre_mim",
    Lang
  >;
export type AllDocumentTypes =
  | ExperienciaDocument
  | IntroDocument
  | ProjetoDocument
  | SobreMimDocument;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ExperienciaDocumentData,
      ExperienciaDocument,
      IntroDocumentData,
      IntroDocument,
      ProjetoDocumentData,
      ProjetoDocument,
      SobreMimDocumentData,
      SobreMimDocument,
      AllDocumentTypes,
    };
  }
}
