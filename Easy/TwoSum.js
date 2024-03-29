// Given an array of integers nums and an integer target, return
// indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    array = [];
    num1 = nums[i];
    num2 = nums[i + 1];
    if (num1 + num2 === target) {
      array.push(nums.indexOf(num1));
      array.push(nums.indexOf(num2));
    }
  }
};

// console.log(twoSum([2,7,11,15], 9)) // [0,1]

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

var twoSum = function (nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i];
    }
    hash[n] = i;
  }
  return [];
};
function twoNumSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    for (let j = 0; j < array.length; j++) {
      let secondNumber = array[j];
      if (number + secondNumber === targetSum) {
        return [number, secondNumber];
      }
    }
  }
  return [];
}

function twoNumSum(array, targetSum) {
  let map = new Map();
  for (nums of array) {
    if (!map.has(targetSum - nums)) {
      map.set(nums, true);
    } else {
      return [nums, map.get(targetSum - nums)];
    }
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  let map = new Map();
  for (nums of array) {
    let potentialMatch = targetSum - nums;
    if (map.has(potentialMatch)) {
      return [potentialMatch, nums];
    } else {
      map.set(nums, true);
    }
  }
  return [THIS];
}

let twoNumberSum = function (array, targetSum) {
  let map = new Map();
  for (nums of array) {
    let potentialMatch = targetSum - nums;
    if (map.has(potentialMatch)) {
      return [potentialMatch, nums];
    } else {
      map.set(nums, false);
    }
  }
};

return (
  <Layout>
    <Head>
      <title>{t("title")}</title>
    </Head>
    <Container maxWidth="md" data-cy="account-dashboard-page" sx={{ mb: 5 }}>
      <Typography fontWeight="bold" variant="h3" mb={2}>
        Your Accounts
      </Typography>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={5}
        justifyContent={{ xs: "center", md: "space-between" }}
      >
        {data.viewer?.accounts?.map((account, index) => (
          <Grid item xs={11} sm={7} md={6}>
            <Card
              key={account?.number}
              color="transparent"
              sx={{ width: { xs: "100%", sm: 425 } }}
              data-cy={`account-information-${index}`}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" mb={-1}>
                  <Stack>
                    <Typography fontSize={12} fontWeight="bold" variant="body2">
                      Name on account
                    </Typography>
                    <Typography
                      fontWeight="bold"
                      variant="h4"
                      fontSize={{ xs: 14, sm: 22 }}
                      mr={{ xs: 0, sm: 0.25 }}
                    >
                      {account?.billingName}
                    </Typography>
                    <Typography color="primary" fontSize={12} my={0.25}>
                      Account: {account?.number}
                    </Typography>
                    {account?.properties !== null && (
                      <>
                        <Typography
                          fontSize={
                            account?.properties[0]?.addressLine1.length !==
                              undefined &&
                            account?.properties[0]?.addressLine1.length > 22
                              ? { xs: 11, sm: 13 }
                              : { xs: 12, sm: 15 }
                          }
                          variant="body2"
                        >
                          {account?.properties[0]?.addressLine1}{" "}
                          {account?.properties[0]?.addressLine2}{" "}
                          {account?.properties[0]?.addressLine3}
                        </Typography>
                        <Typography
                          fontSize={
                            account?.properties[0]?.addressLine1.length !==
                              undefined &&
                            account?.properties[0]?.addressLine1.length > 22
                              ? { xs: 11, sm: 13 }
                              : { xs: 12, sm: 15 }
                          }
                          mt={-0.5}
                          variant="body2"
                        >
                          {account?.properties[0]?.addressLine4},{" "}
                          {account?.properties[0]?.addressLine5}{" "}
                          {account?.properties[0]?.postcode}
                        </Typography>
                      </>
                    )}
                  </Stack>
                  <Stack justifyContent="space-between">
                    <Stack alignItems="end">
                      <Typography
                        fontSize={12}
                        fontWeight="bold"
                        variant="body1"
                      >
                        Balance Due
                      </Typography>
                      <Typography
                        fontWeight="bold"
                        variant="h2"
                        ml={{ xs: 0.5, sm: 1 }}
                        fontSize={{ xs: 25, sm: 30 }}
                      >
                        ${account?.balance}
                      </Typography>
                    </Stack>
                    <Stack>
                      <CardActions>
                        <Link
                          href={{
                            pathname: "/account/[accountNumber]",
                            query: { accountNumber: account?.number },
                          }}
                        >
                          <Button
                            sx={{
                              mt: 3,
                              ml: { xs: 0.5, sm: 2 },
                              mr: -1,
                              px: { xs: 2, sm: 2.5 },
                            }}
                            size="small"
                            data-cy={`account-information-button-${index}`}
                          >
                            <Typography
                              fontSize={{ xs: 10, sm: 12 }}
                              fontWeight="bold"
                              variant="body2"
                              whiteSpace="nowrap"
                            >
                              View Account
                            </Typography>
                          </Button>
                        </Link>
                      </CardActions>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Layout>
);
