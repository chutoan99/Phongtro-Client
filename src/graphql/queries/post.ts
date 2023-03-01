export const postQuery = (pageNumber, pageSize) => {
  return {
    query: `query ($pageSize: Int, $pageNumber: Int, $orderBy: String, $direction: String, $userid: String, $start: String, $title: String, $address: String, $categoryCode: String, $priceCode: String, $areaCode: String, $provinceCode: String) {
      post(pageSize: $pageSize, pageNumber: $pageNumber, orderBy: $orderBy, direction: $direction, userid: $userid, start: $start, title: $title, address: $address, categoryCode: $categoryCode, priceCode: $priceCode, areaCode: $areaCode, provinceCode: $provinceCode) {
        err
        msg
        pageNumber
        pageSize
        response {
          address
          areaCode
          areaNumber
          attributes {
            price
            acreage
            createdAt
            hashtag
            id
            published
            updatedAt
          }
          attributesId
          categoryCode
          createdAt
          description
          id
          imagesId
          labelCode
          listImage {
            createdAt
            id
            postImg
            image
            total
            updatedAt
          }
          overviewId
          overviews {
            area
            bonus
            created
            code
            createdAt
            expired
            id
            target
            type
            updatedAt
          }
          priceCode
          priceNumber
          provinceCode
          start
          title
          updatedAt
          user {
            avatar
            createdAt
            id
            name
            password
            phone
            updatedAt
            zalo
          }
          userId
        }
      }
    }`,
    variables: {
      pageNumber,
      pageSize,
      orderBy: null,
      direction: null,
      userid: null,
      start: null,
      title: null,
      address: null,
      categoryCode: null,
      priceCode: null,
      areaCode: null,
      provinceCode: null,
    },
  };
};

export const postIdQuery = (id: String) => {
  return {
    query: `query ($postId: ID!) {
    postId(id: $postId) {
      err
      msg
      response {
        address
        areaCode
        areaNumber
        attributes {
          acreage
          createdAt
          hashtag
          id
          price
          published
          updatedAt
        }
        attributesId
        categoryCode
        createdAt
        description
        id
        imagesId
        labelCode
        listImage {
          createdAt
          id
          image
          postImg
          total
          updatedAt
        }
        overviewId
        overviews {
          area
          bonus
          code
          created
          createdAt
          expired
          id
          target
          type
          updatedAt
        }
        priceCode
        start
        priceNumber
        provinceCode
        title
        updatedAt
        user {
          avatar
          createdAt
          id
          name
          password
          phone
          updatedAt
          zalo
        }
        userId
      }
    }
  }`,
    variables: { postId: id },
  };
};

export const newPostQuery = (pageNumber, pageSize) => {
  return {
    query: `query ($pageNumber: Int, $pageSize: Int) {
      newPost(pageNumber: $pageNumber, pageSize: $pageSize) {
        err
        msg
        response {
          address
          areaCode
          areaNumber
          attributesId
          attributes {
            acreage
            createdAt
            hashtag
            id
            published
            price
            updatedAt
          }
          categoryCode
          createdAt
          description
          id
          imagesId
          labelCode
          listImage {
            createdAt
            id
            image
            postImg
            total
            updatedAt
          }
          overviewId
          overviews {
            area
            bonus
            code
            createdAt
            created
            expired
            id
            target
            type
            updatedAt
          }
          priceCode
          priceNumber
          provinceCode
          start
          title
          updatedAt
          user {
            avatar
            createdAt
            id
            name
            password
            phone
            updatedAt
            zalo
          }
          userId
        }
        total
        pageNumber
        pageSize
      }
    }`,
    variables: { pageNumber, pageSize },
  };
};
