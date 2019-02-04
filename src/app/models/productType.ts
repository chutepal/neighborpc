export interface ProductType
    {
        asset?: [
          {
            assetId?: string,
            primary?: true,
            thumbnail?: true
          }
        ],
        category?: string,
        code?: string,
        description?: string,
        fieldList?: [
          {
            comparable?: true,
            dataType?: string,
            deleted?: 0,
            description?: string,
            displayType?: string,
            fieldGroup?: string,
            fieldName?: string,
            filterable?: true,
            id?: string,
            imageId?: string,
            maxValue?: 0,
            minValue?: 0,
            overridable?: true,
            preDefinedValues?: [String],
            quickViewable?: true,
            required?: true,
            status?: string
          }
        ],
        id?: string,
        includeInTopMenu?: true,
        isComparable?: true,
        leafNode?: boolean,
        name?: string,
        parentId?: string,
        questions?: [
          {
            dataType?: string,
            fieldValidationCondition?: string,
            id?: string,
            imageId?: string,
            maxValue?: 0,
            minValue?: 0,
            options?: Array<string>,
            questionGroup?: string,
            questionText?: string,
            required?: true
          }
        ],
        showOnHome?: true,
        tags?: Array<string>
      }
