export const postQuery = (pageNumber, pageSize, categoryCode) => {
  return {
    query: `query ($pageSize: Int, $pageNumber: Int, $orderBy: String, $direction: String, $userid: String, $start: String, $title: String, $address: String, $categoryCode: String, $priceNumber: [Int], $areaNumber: [Int], $provinceCode: String) {
      post(pageSize: $pageSize, pageNumber: $pageNumber, orderBy: $orderBy, direction: $direction, userid: $userid, start: $start, title: $title, address: $address, categoryCode: $categoryCode, priceNumber: $priceNumber, areaNumber: $areaNumber, provinceCode: $provinceCode) {
        err
        msg
        pageNumber
        pageSize
        response {
          address
          id
          attributes {
            price
            acreage
            published
          }
          description
          listImage {
            postImg
            total
          }
          start
          title
          updatedAt
          user {
            avatar
            name
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
      categoryCode,
      orderBy: null,
      direction: null,
      userid: null,
      start: null,
      title: null,
      address: null,
      priceNumber: null,
      areaNumber: null,
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
        areaNumber
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
        priceNumber
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
          areaNumber
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
          priceNumber
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
